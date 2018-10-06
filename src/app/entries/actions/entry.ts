import { Action } from '@ngrx/store';
import { Entry } from '../models/entry.model'
import { Resource } from '../models/resource.model'

export enum EntryActionTypes {
  AddResource = '[Entry] Add Resource',
  AddResourceSuccess = '[Entry] Add Resource Success',
  AddResourceFail = '[Entry] Add Resource Fail',
  CreateEntry = '[Entry] Add Entry',
  CreateEntrySuccess = '[Entry] Add Entry Success',
  CreateEntryFail = '[Entry] Add Entry Fail',
  RemoveEntry = '[Entry] Remove Entry',
  RemoveEntrySuccess = '[Entry] Remove Entry Success',
  RemoveEntryFail = '[Entry] Remove Entry Fail',
  Load = '[Entry] Load',
  LoadSuccess = '[Entry] Load Success',
  LoadFail = '[Entry] Load Fail',
}

/**
 * Add Resource Actions
 */
export class AddResource implements Action {
  readonly type = EntryActionTypes.AddResource;

  constructor(public payload: Resource) {}
}

export class AddResourceSuccess implements Action {
  readonly type = EntryActionTypes.AddResourceSuccess;
}

export class AddResourceFail implements Action {
  readonly type = EntryActionTypes.AddResourceFail;
}


/**
 * Craete Entry Actions
 */
export class CreateEntry implements Action {
  readonly type = EntryActionTypes.CreateEntry;

  constructor(public payload: Resource) {}
}

export class CreateEntrySuccess implements Action {
  readonly type = EntryActionTypes.CreateEntrySuccess;

  constructor(public payload: Entry) {}
}

export class CreateEntryFail implements Action {
  readonly type = EntryActionTypes.CreateEntryFail;

  constructor(public payload: Entry) {}
}

/**
 * Remove Book from Collection Actions
 */
export class RemoveEntry implements Action {
  readonly type = EntryActionTypes.RemoveEntry;

  constructor(public payload: Entry) {}
}

export class RemoveEntrySuccess implements Action {
  readonly type = EntryActionTypes.RemoveEntrySuccess;

  constructor(public payload: Entry) {}
}

export class RemoveEntryFail implements Action {
  readonly type = EntryActionTypes.RemoveEntryFail;

  constructor(public payload: Entry) {}
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = EntryActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = EntryActionTypes.LoadSuccess;

  constructor(public payload: Entry[]) {}
}

export class LoadFail implements Action {
  readonly type = EntryActionTypes.LoadFail;

  constructor(public payload: any) {}
}

export type EntryActions =
  | AddResource
  | AddResourceSuccess
  | AddResourceFail
  | CreateEntry
  | CreateEntrySuccess
  | CreateEntryFail
  | RemoveEntry
  | RemoveEntrySuccess
  | RemoveEntryFail
  | Load
  | LoadSuccess
  | LoadFail;
