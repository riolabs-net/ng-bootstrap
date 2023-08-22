import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { EventEmitter, Injectable, Type } from '@angular/core'
import { InnerModalService } from './inner-modal.service'
import { DialogData } from './data/dialog-data'



@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: InnerModalService) { }

  public openDialog<T = any>(name: string, data: DialogData<T>): void {
    this.modalService.openDialog<T>(name, data)
  }
}