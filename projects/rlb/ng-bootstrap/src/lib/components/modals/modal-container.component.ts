import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BuilderComponent } from '../../shared/component-builder/builder.component';
import { InnerModalService } from './inner-modal.service';
import { ComponentHostDirective } from '../../shared/component-builder/component-host.directive';
import { ModalData } from './data/modal-data';

@Component({
  selector: 'rlb-modal-container',
  template: `<ng-template component-host></ng-template>`,
})
export class ModalContainerComponent extends BuilderComponent<InnerModalService> {
  @ViewChild(ComponentHostDirective, { static: true }) component!: ComponentHostDirective;
  @Input('id') builderId!: string;
  
  constructor(private modalService: InnerModalService) {
    super(modalService);
      this.modalService.modalCreate = (name: string, id: string, data: ModalData<any>) => {
      return this.buildComponent({ name, data }, { inputs: { id }, setInstance: true });
    };
  }
}
