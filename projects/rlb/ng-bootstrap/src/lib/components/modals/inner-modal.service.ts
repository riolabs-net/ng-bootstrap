import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core'
import { Observable, BehaviorSubject, filter, map, Subject } from 'rxjs'
import { ModalData } from './data/modal-data'
import { AbstractRegistryService } from '../../shared/abstract.registry.service'
import { ModalRegistryOptions } from './options/modal-registry.options'
import { GenericComponent } from '../../shared/component-builder/generic.component'
import { UniqueIdService } from '../../shared/unique-id.service'
import { ModalCloseReason } from '../../shared/colors'
import { ModalResult } from './data/modal-resutl'

@Injectable({
  providedIn: 'root',
})
export class InnerModalService extends AbstractRegistryService<Type<any>> {

  public dialogCreate!: (name: string, id: string, data: ModalData<any>) => ComponentRef<GenericComponent> | null
  public modalClose: Subject<ModalResult<any> & { id: string }> = new Subject<ModalResult<any> & { id: string }>()
  private allModals: { id: string, dialog: ComponentRef<GenericComponent> }[] = []

  constructor(options: ModalRegistryOptions, private mediaMatcher: MediaMatcher, private uniqueIdService: UniqueIdService) {
    super()
    if (Array.isArray(options)) {
      const modals = (options as ModalRegistryOptions[]).reverse().map(o => o.modals).flat()
      for (const modal of modals) {
        this.add(modal);
      }
    } else {
      if (options && options.modals && options.modals.length > 0) {
        for (const modal of options.modals) {
          this.add(modal)
        }
      }
    }
  }

  public openModal<Input = any, Output = any>(name: string, data: ModalData<Input>): Observable<ModalResult<Output> | null> {
    const dialogId = `rlb-dialog${this.uniqueIdService.id}`
    const dialog = this.dialogCreate(name, dialogId, data)
    this.allModals.push({ id: dialogId, dialog: dialog! })
    return this.modalClose
      .asObservable()
      .pipe(
        filter(o => o?.id === dialogId),
        map(({ reason, result }) => {
          return { reason, result }
        })
      )
  }

  public eventModal(event: string, reason: ModalCloseReason, id: string, result: any): void {
    if (event === 'hidden') {
      const dialog = this.allModals.find((d) => d.id === id)
      if (dialog) {
        dialog.dialog.destroy()
        this.allModals = this.allModals.filter((d) => d.id !== id)
      }
      this.modalClose.next({ reason, result, id })
    }
  }
}