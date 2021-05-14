import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  private _search$ = new Subject<void>();
  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: ''
  };
  constructor() { }

  //GET VARLUES FROM STATE
  get searchTerm() { return this._state.searchTerm; }

  //SET VARIABLES OF STATE
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
}
