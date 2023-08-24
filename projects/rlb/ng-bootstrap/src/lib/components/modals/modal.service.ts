import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { EventEmitter, Injectable, Type } from '@angular/core'
import { InnerModalService } from './inner-modal.service'
import { ModalData } from './data/modal-data'



@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: InnerModalService) { }

  public openModal<T = any>(name: string, data: ModalData<T>): void {
    this.modalService.openModal<T>(name, data)
  }
}