import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core'
import { Observable, filter, map, Subject } from 'rxjs'
import { ToastData } from './data/toast-data'
import { AbstractRegistryService } from '../../shared/abstract.registry.service'
import { ToastRegistryOptions } from './options/toast-registry.options'
import { GenericComponent } from '../../shared/component-builder/generic.component'
import { UniqueIdService } from '../../shared/unique-id.service'
import { ModalCloseReason } from '../../shared/colors'
import { ToastResult } from './data/toast-resutl'

@Injectable({
  providedIn: 'root',
})
export class InnerToastService extends AbstractRegistryService<Type<any>> {

  public toastCreate!: (name: string, id: string, data: ToastData<any>) => ComponentRef<GenericComponent> | null
  public modalClose: Subject<ToastResult<any> & { id: string }> = new Subject<ToastResult<any> & { id: string }>()
  private allModals: { id: string, dialog: ComponentRef<GenericComponent> }[] = []

  constructor(options: ToastRegistryOptions, private mediaMatcher: MediaMatcher, private uniqueIdService: UniqueIdService) {
    super()
    if (Array.isArray(options)) {
      const modals = (options as ToastRegistryOptions[]).reverse().map(o => o.toasts).flat()
      for (const modal of modals) {
        this.add(modal);
      }
    } else {
      if (options && options.toasts && options.toasts.length > 0) {
        for (const modal of options.toasts) {
          this.add(modal)
        }
      }
    }
  }

  public openToast<Input = any, Output = any>(name: string, data: ToastData<Input>): Observable<ToastResult<Output> | null> {
    const dialogId = `rlb-dialog${this.uniqueIdService.id}`
    const dialog = this.toastCreate(name, dialogId, data)
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

  public eventToast(event: string, reason: ModalCloseReason, id: string, result: any): void {
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