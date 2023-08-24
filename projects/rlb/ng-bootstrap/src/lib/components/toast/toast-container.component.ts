import { Component, ViewChild } from '@angular/core';
import { BuilderComponent } from '../../shared/component-builder/builder.component';
import { InnerToastService } from './inner-toast.service';
import { ComponentHostDirective } from '../../shared/component-builder/component-host.directive';
import { ToastData } from './data/toast-data';

@Component({
  selector: 'rlb-toast-container',
  template: `<ng-template component-host></ng-template>`,
})
export class ToastContainerComponent extends BuilderComponent<InnerToastService> {
  @ViewChild(ComponentHostDirective, { static: true }) component!: ComponentHostDirective;

  constructor(private toastService: InnerToastService) {
    super(toastService);
    this.toastService.toastCreate = (name: string, id: string, data: ToastData<any>) => {
      return this.buildComponent({ name, data }, { inputs: { id }, setInstance: true });
    };
  }
}
