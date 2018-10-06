import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ShowFooter = '[Layout] Show Footer',
  HideFooter = '[Layout] Hide Footer',
}

export class ShowFooter implements Action {
  readonly type = LayoutActionTypes.ShowFooter;
}

export class HideFooter implements Action {
  readonly type = LayoutActionTypes.HideFooter;
}

export type LayoutActions = ShowFooter | HideFooter;
