import { Action } from '@ngrx/store';

export enum ProductTabActionTypes {
  SelectTab = '[Product Tabs] Select Tab',
}


/* Footer Actions */

export class SelectTab implements Action {
  readonly type = ProductTabActionTypes.SelectTab;

  constructor(public payload: number) {}
}

export type PorductTabActions =
  | SelectTab