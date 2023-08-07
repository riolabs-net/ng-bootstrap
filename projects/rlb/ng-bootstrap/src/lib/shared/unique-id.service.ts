import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  private _id: number

  constructor() {
    this._id = 0
  }

  public get id() {
    this._id++
    return `-control-id-${this._id}`
  }

}
