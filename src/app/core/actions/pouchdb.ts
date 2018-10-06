import { Action } from '@ngrx/store';

export enum PouchDbActionTypes {
  SyncDB = '[PouchDB] Sync DB',
  SyncDBCancel = '[PouchDB] Sync DB Cancel',
  SyncDBCancelSuccess = '[PouchDB] Sync DB Cancel Success',
  SyncDBChange = '[PouchDB] Sync DB Change',
  SyncDBPause = '[PouchDB] Sync DB Pause',
  SyncDBActive = '[PouchDB] Sync DB Active',
  SyncDBSuccess = '[PouchDB] Sync DB Success',
  SyncDBFail = '[PouchDB] Sync DB Fail',
  ReplicateTo = '[PouchDB] Replicate To',
  ReplicateToSuccess = '[PouchDB] Replicate To Success',
  ReplicateToFail = '[PouchDB] Replicate To Fail',
  DestroyDB = '[PouchDB] Destroy Local DB',
  DestroyDBSuccess = '[PouchDB] Destroy Local DB Success',
  DestroyDBFail = '[PouchDB] Destroy Local DB Fail',
}

export class SyncDB implements Action {
  readonly type = PouchDbActionTypes.SyncDB;
}

export class SyncDBCancel implements Action {
  readonly type = PouchDbActionTypes.SyncDBCancel;
}

export class SyncDBCancelSuccess implements Action {
  readonly type = PouchDbActionTypes.SyncDBCancelSuccess;

  constructor(public payload: string) {}
}

export class ReplicateTo implements Action {
  readonly type = PouchDbActionTypes.ReplicateTo;
}

export class ReplicateToSuccess implements Action {
  readonly type = PouchDbActionTypes.ReplicateToSuccess;

  constructor(public payload: string) {}
}

export class ReplicateToFail implements Action {
  readonly type = PouchDbActionTypes.ReplicateToFail;

  constructor(public payload: string) {}
}

export class DestroyDB implements Action {
  readonly type = PouchDbActionTypes.DestroyDB;
}

export class DestroyDBSuccess implements Action {
  readonly type = PouchDbActionTypes.DestroyDBSuccess;
}

export class DestroyDBFail implements Action {
  readonly type = PouchDbActionTypes.DestroyDBFail;

  constructor(public payload: string) {}
}

export class SyncDBChange implements Action {
  readonly type = PouchDbActionTypes.SyncDBChange;

  constructor(public payload: any) {}
}

export class SyncDBActive implements Action {
  readonly type = PouchDbActionTypes.SyncDBActive;

  constructor(public payload: any) {}
}

export class SyncDBPause implements Action {
  readonly type = PouchDbActionTypes.SyncDBPause;

  constructor(public payload: any) {}
}

export class SyncDBSuccess implements Action {
  readonly type = PouchDbActionTypes.SyncDBSuccess;

  constructor(public payload: any) {}
}

export class SyncDBFail implements Action {
  readonly type = PouchDbActionTypes.SyncDBFail;

  constructor(public payload: any) {}
}

export type PouchDbActions = 
| SyncDB
| SyncDBPause
| SyncDBActive
| SyncDBSuccess
| SyncDBFail
| SyncDBCancel
| SyncDBCancelSuccess
| ReplicateTo
| ReplicateToSuccess
| ReplicateToFail
| DestroyDB
| DestroyDBSuccess
| DestroyDBSuccess;
