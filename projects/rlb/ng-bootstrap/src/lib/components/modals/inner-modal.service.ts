import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core'
import { Observable, BehaviorSubject, filter } from 'rxjs'
import { DialogData } from './data/dialog-data'
import { AbstractRegistryService } from '../../shared/abstract.registry.service'
import { ModalRegistryOptions } from './rlb-modal-registry.options'
import { GenericComponent } from '../../shared/component-builder/generic.component'
import { UniqueIdService } from '../../shared/unique-id.service'

@Injectable({
  providedIn: 'root',
})
export class InnerModalService extends AbstractRegistryService<Type<any>> {

  public modalClose: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)

  public dialogCreate!: (name: string, id: string, data: DialogData<any>) => ComponentRef<GenericComponent> | null

  constructor(options: ModalRegistryOptions, private mediaMatcher: MediaMatcher, private uniqueIdService: UniqueIdService) {
    super()
    if (options && options.modals && options.modals.length > 0) {
      for (const modal of options.modals) {
        this.add(modal)
      }
    }
  }

  public openDialog<T = any>(name: string, data: DialogData<T>): Observable<string | null> {
    const dialogId = this.uniqueIdService.id
    const dialog = this.dialogCreate(name, dialogId, data)
    console.log('dialog', dialog)
    return this.modalClose
      .asObservable()
      .pipe(filter((id: string | null) => id === dialogId))
  }

  public closeDialog(id: string): void {
    this.modalClose.next(id)
  }
}