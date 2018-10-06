import * as EXIF from 'exif-js'
import { FormGroup } from '@angular/forms';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export function FindUserAttributeValue(key: string, userAttributes: CognitoUserAttribute[]) {
  for (let attribute in userAttributes ) {
    if (userAttributes[attribute].getName() === key) {
      return userAttributes[attribute].getValue()
    }
  }
}

export function GetCoordFromExif(exif: any) {
  let latitude = exif.GPSLatitude[0] + ( exif.GPSLatitude[1] / 60 ) + exif.GPSLatitude[2] / (60 * 60)
  let longitude = exif.GPSLongitude[0]  + ( exif.GPSLongitude[1] / 60 ) + exif.GPSLongitude[2] / (60 * 60)
  if (exif.GPSLongitudeRef === "W") { longitude = longitude * -1 }
  if (exif.GPSLatitudeRef === "S") { latitude = latitude * -1 }
  return {latitude, longitude}
}

export function MatchValidator(group: FormGroup) {
  let password = group.controls.confirmPassword.value
  let toConfirm = group.controls.password.value

  if (password === toConfirm) {
    return null
  }

  return {'mismatch': true}
}

export function Id() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  })
}

export function GetExif(blob) {
  return new Promise(resolve => {
    EXIF.getData(blob, function(){
      resolve(EXIF.getAllTags(blob))
    })
  })
}

export function CreateThumbnail(photo) {
  return new Promise(resolve => {
    const img: any = new Image();

    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext("2d")
  
    canvas.height = 300
    canvas.width = 300
  
    img.onload = function() {
  
      let size
      let width = img.width
      let height = img.height
      let oc = document.createElement('canvas')
      let octx = oc.getContext("2d")
  
      if (width < height) {
        size = width
      } else {
        size = height
      }
  
      oc.width = size
      oc.height = size
  
      // draw image
      octx.drawImage(img, 0, 0);
  
      // Final
      ctx.drawImage(oc, 0, 0, oc.width, oc.height,
        0, 0, canvas.width, canvas.height);
  
      // export base64
      let dataUrl = canvas.toDataURL('image/jpeg', 1)
      let base64 = dataUrl.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      resolve(base64)
    }
  
    let dataUrl = 'data:' + photo.content_type + ';base64,' + photo.data
    img.src = dataUrl
  })
}