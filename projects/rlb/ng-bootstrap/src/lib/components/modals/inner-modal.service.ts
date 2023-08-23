import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core'
import { Observable, BehaviorSubject, filter, map, Subject } from 'rxjs'
import { DialogData } from './data/dialog-data'
import { AbstractRegistryService } from '../../shared/abstract.registry.service'
import { ModalRegistryOptions } from './rlb-modal-registry.options'
import { GenericComponent } from '../../shared/component-builder/generic.component'
import { UniqueIdService } from '../../shared/unique-id.service'
import { ModalCloseReason } from '../../shared/colors'
import { DialogResult } from './data/dialog-resutl'

@Injectable({
  providedIn: 'root',
})
export class InnerModalService extends AbstractRegistryService<Type<any>> {

  public dialogCreate!: (name: string, id: string, data: DialogData<any>) => ComponentRef<GenericComponent> | null
  public modalClose: Subject<DialogResult<any> & { id: string }> = new Subject<DialogResult<any> & { id: string }>()
  private allDialogs: { id: string, dialog: ComponentRef<GenericComponent> }[] = []

  constructor(options: ModalRegistryOptions, private mediaMatcher: MediaMatcher, private uniqueIdService: UniqueIdService) {
    super()
    if (options && options.modals && options.modals.length > 0) {
      for (const modal of options.modals) {
        this.add(modal)
      }
    }
  }

  public openDialog<Input = any, Output = any>(name: string, data: DialogData<Input>): Observable<DialogResult<Output> | null> {
    const dialogId = `rlb-dialog${this.uniqueIdService.id}`
    const dialog = this.dialogCreate(name, dialogId, data)
    this.allDialogs.push({ id: dialogId, dialog: dialog! })
    return this.modalClose
      .asObservable()
      .pipe(
        filter(o => o?.id === dialogId),
        map(({ reason, result }) => {
          return { reason, result }
        })
      )
  }

  public eventDialog(event: string, reason: ModalCloseReason, id: string): void {
    if (event === 'hidden') {
      const dialog = this.allDialogs.find((d) => d.id === id)
      if (dialog) {
        dialog.dialog.destroy()
        this.allDialogs = this.allDialogs.filter((d) => d.id !== id)
      }
      this.modalClose.next({ reason, result: null, id })
    }
  }
}