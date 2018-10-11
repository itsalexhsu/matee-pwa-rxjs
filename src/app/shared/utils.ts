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