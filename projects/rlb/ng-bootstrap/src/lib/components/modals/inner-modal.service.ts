import { Breakpoints, MediaMatcher } from '@angular/cdk/layout'
import { ComponentRef, ElementRef, EventEmitter, Injectable, Type } from '@angular/core'
import { DialogData } from './data/dialog-data'
import { AbstractRegistryService } from '../../shared/abstract.registry.service'
import { ModalRegistryOptions } from './rlb-modal-registry.options'
import { GenericComponent } from '../../shared/component-builder/generic.component'

@Injectable({
  providedIn: 'root',
})
export class InnerModalService extends AbstractRegistryService<Type<any>> {

  public dialogCreate!: (name: string, data: DialogData<any>) => ComponentRef<GenericComponent> | null

  constructor(options: ModalRegistryOptions, private mediaMatcher: MediaMatcher) {
    super()
    if (options && options.modals && options.modals.length > 0) {
      for (const modal of options.modals) {
        this.add(modal)
      }
    }
  }

  public openDialog<T>(name: string, data: DialogData<T>): void {
    const dialog = this.dialogCreate(name, data)
  }
}