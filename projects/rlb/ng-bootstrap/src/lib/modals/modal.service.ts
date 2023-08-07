import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { Injectable, Type } from '@angular/core'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { from, map, Observable } from 'rxjs'
import { DialogData, DialogResult } from './dialog-data'
import { ModalRegistryOptions } from './rlb-modal-registry.options'
import { AbstractRegistryService } from '../shared/abstract.registry.service'


@Injectable({
  providedIn: 'root',
})
export class ModalService extends AbstractRegistryService<Type<any>> {

  constructor(options: ModalRegistryOptions, private modalService: NgbModal, private mediaMatcher: MediaMatcher) {
    super()
    if (options && options.modals && options.modals.length > 0) {
      for (const modal of options.modals) {
        this.add(modal)
      }
    }
  }

  public openDialog<In = any, Out = void>(name: string, data: DialogData<In>): Observable<DialogResult<Out>> {
    const options: NgbModalOptions = { backdrop: 'static', centered: true };
    if (this.mediaMatcher.matchMedia(Breakpoints.Handset).matches) {
      options.size = 'full-screen';
    }
    const modalRef = this.modalService.open(this.get(name), options);
    modalRef.componentInstance.data = data
    return from<Promise<DialogResult<Out>>>(modalRef.result);
  }
}