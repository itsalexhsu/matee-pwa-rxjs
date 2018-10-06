import { Action } from '@ngrx/store';
import { Resource } from '../models/resource.model'

export enum ResourceActionTypes {
  Create = '[Resource] Create Resource',
  CreateSuccess = '[Resource] Create Resource Success',
  CreateFail = '[Resource] Create Resource Fail',
  LoadAll = '[Resource] Load All Resources',
  LoadAllSuccess = '[Resource] Load All Resource Success',
  LoadAllFail = '[Resource] Load All Resource Fail',
  Load = '[Resource] Load Resource',
  LoadSuccess = '[Resource] Load Success',
  LoadFail = '[Resource] Load Fail',
  Clear = '[Resource] Clear Temporary Resource',
  ClearSuccess = '[Resource] Clear Temporary Resource Success',
  ClearFail = '[Resource] Clear Temporary Resource Fail',
  Archive = '[Resource] Archive Resource',
  ArchiveSuccess = '[Resource] Archive Resource Success',
  ArchiveFail = '[Resource] Archive Resource Fail',
}

/**
 * Archive Resource Actions
 */

export class Archive implements Action {
  readonly type = ResourceActionTypes.Archive;

  constructor(public payload: string) {}
}

export class ArchiveSuccess implements Action {
  readonly type = ResourceActionTypes.ArchiveSuccess;
}

export class ArchiveFail implements Action {
  readonly type = ResourceActionTypes.ArchiveFail;

  constructor(public payload: string) {}
}

/**
 * Create Resource Actions
 */

export class Create implements Action {
  readonly type = ResourceActionTypes.Create;

  constructor(public payload: {id: string, resource: Resource}) {}
}

export class CreateSuccess implements Action {
  readonly type = ResourceActionTypes.CreateSuccess;

  constructor(public payload: Resource) {}
}

export class CreateFail implements Action {
  readonly type = ResourceActionTypes.CreateFail;

  constructor(public payload: Resource) {}
}

/**
 * Load All Resource Actions
 */
export class LoadAll implements Action {
  readonly type = ResourceActionTypes.LoadAll;
}

export class LoadAllSuccess implements Action {
  readonly type = ResourceActionTypes.LoadAllSuccess;

  constructor(public payload: Resource[]) {}
}

export class LoadAllFail implements Action {
  readonly type = ResourceActionTypes.LoadAllFail;

  constructor(public payload: string) {}
}

/**
 * Load Resource Actions
 */

export class Load implements Action {
  readonly type = ResourceActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = ResourceActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = ResourceActionTypes.LoadFail;

  constructor(public payload: any) {}
}

/**
 * Clear Resource Actions
 */

export class Clear implements Action {
  readonly type = ResourceActionTypes.Clear;
}

export class ClearSuccess implements Action {
  readonly type = ResourceActionTypes.ClearSuccess;
}

export class ClearFail implements Action {
  readonly type = ResourceActionTypes.ClearFail;
}

export type ResourceActions =
  | LoadAll
  | LoadAllSuccess
  | LoadAllFail
  | Load
  | LoadSuccess
  | LoadFail
  | Create
  | CreateSuccess
  | CreateFail
  | Clear
  | ClearSuccess
  | ClearFail
  | Archive
  | ArchiveSuccess
  | ArchiveFail;