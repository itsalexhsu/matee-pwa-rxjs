import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

import { Store, select } from '@ngrx/store';
import { Observable, Subscription, from } from "rxjs";
import { map } from 'rxjs/operators';

import * as localStorage from 'localforage'

import * as fromEntries from '../../reducers'
import * as location from "../../actions/location";
import * as resource from "../../actions/resource";

import { CreateThumbnail, GetCoordFromExif } from "../../../shared/utils";
import { OrientationPipe } from "../../../shared/pipes/resetOrientation";

import { Resource, LocationRequest, ImageForm } from "../../models/resource.model";

@Component({
  selector: 'app-add-resource',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {

  toggleModal = false

  activeSubscription: Subscription

  $locations: Observable<any[]> = this.store.pipe(select(fromEntries.getLocationsResult))
  $resource: Observable<Resource> = from(localStorage.getItem<Resource>('temporary-resource'))
  $pending: Observable<boolean> = this.store.pipe(select(fromEntries.getResourceCreating))
  
  resource: Resource
  coord: string

  form: FormGroup = new FormGroup ({
    caption: new FormControl(''),
    locationName: new FormControl('')
  })

  setLocation(location) {
    this.resource.meta.location = location
    this.form.patchValue({locationName: location.name})
  }

  clearLocation() {
    this.form.patchValue({locationName: ''})
    delete this.resource.meta['location']
  }

  setThumbnail(photo) {
    return from(CreateThumbnail(photo))
  }

  displayNearbys() {
    if (this.resource.meta.exif.hasOwnProperty('GPSLatitude')) {
      let Coord = GetCoordFromExif(this.resource.meta.exif)
      this.coord = Coord.latitude + ',' + Coord.longitude
      let request: LocationRequest = {location: this.coord, radius: 250}
      this.store.dispatch(new location.SearchNearby(request))
    } else {
      this.store.dispatch(new location.GetUserCoord)
      this.store.pipe(select(fromEntries.getUserCoord)).subscribe(res => {
        if (res) {
          this.coord = res.coords.latitude + ',' + res.coords.longitude
          let request: LocationRequest = {location: this.coord, radius: 250}
          this.store.dispatch(new location.SearchNearby(request))
        }
      })
    }
  }

  searchKeyword(keyword?: string) {
    if (keyword) {
      let request: LocationRequest = {query: keyword, location: this.coord, radius: 250}
      this.store.dispatch(new location.Search(request))
    } else {
      let request: LocationRequest = {location: this.coord, radius: 250}
      this.store.dispatch(new location.SearchNearby(request))
    }
  }

  submit(form: ImageForm) {
    this.setThumbnail(this.resource._attachments.photo)
      .pipe(map(res => res))
      .subscribe(res => {
        this.resource._attachments.thumbnail = {content_type: 'image/jpeg', data: res}
        this.resource.status = 'saved'
        this.resource.meta.caption = form.caption || 'untitled'
        this.store.dispatch(new resource.Create({id: Date.now().toString(), resource: this.resource}))
      })
  }

  showModal(event: boolean) {
    this.toggleModal = true
  }

  closeModal(event: boolean) {
    this.toggleModal = false
    this.searchKeyword()
  }

  constructor(
    private store: Store<fromEntries.State>,
    private route: Router,
    private orientation: OrientationPipe,
  ) {
    this.activeSubscription = this.$resource.subscribe((res: Resource) => {
      this.resource = res
      this.displayNearbys()
    })
    
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.store.dispatch(new location.Clear)
    this.activeSubscription.unsubscribe()
  }

}
