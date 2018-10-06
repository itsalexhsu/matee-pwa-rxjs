import { Action } from '@ngrx/store';
import { LocationRequest } from "../models/resource.model";

export enum LocationActionTypes {
    GetUserCoord = '[Location] Get User Coordinate',
    GetUserCoordSuccess = '[Location] Get User Coordinate Success',
    GetUserCoordFail = '[Location] Get User Coordinate Fail',
    Search = '[Location] Search Locations',
    SearchNearby = '[Location] Search Nearby Locations',
    SearchSuccess = '[Location] Search Success',
    SearchFail = '[Location] Search Fail',
    Clear = '[Location] Clear',
}

// Get User Coordinate Actions
export class GetUserCoord implements Action {
    readonly type = LocationActionTypes.GetUserCoord;
}

export class GetUserCoordSuccess implements Action {
    readonly type = LocationActionTypes.GetUserCoordSuccess;

    constructor(public payload: any) {}
}

export class GetUserCoordFail implements Action {
    readonly type = LocationActionTypes.GetUserCoordFail;

    constructor(public payload: string) {}
}

// Search Actions
export class Search implements Action {
    readonly type = LocationActionTypes.Search;

    constructor(public payload: LocationRequest) {}
}

export class SearchNearby implements Action {
    readonly type = LocationActionTypes.SearchNearby;

    constructor(public payload: LocationRequest) {}
}

export class SearchSuccess implements Action {
    readonly type = LocationActionTypes.SearchSuccess;

    constructor(public payload: any[]) {}
}

export class SearchFail implements Action {
    readonly type = LocationActionTypes.SearchFail;

    constructor(public payload: string) {}
}

// Clear Actions

export class Clear implements Action {
    readonly type = LocationActionTypes.Clear;
}

export type LocationActions =
    | GetUserCoord
    | GetUserCoordSuccess
    | GetUserCoordFail
    | Search
    | SearchNearby
    | SearchSuccess
    | SearchFail
    | Clear;