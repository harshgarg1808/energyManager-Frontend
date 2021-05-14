import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuServiceService {

  constructor() { }
  private _collapsed : BehaviorSubject<any> = new BehaviorSubject(false)
  collapsed = this._collapsed.asObservable()

  toggleSidemenu(){
    this._collapsed.next(!this._collapsed.value)
  }
}
