import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BuilderComponent } from '../../shared/component-builder/builder.component';
import { InnerModalService } from './inner-modal.service';
import { ComponentHostDirective } from '../../shared/component-builder/component-host.directive';
import { DialogData } from './data/dialog-data';
;

@Component({
  selector: 'rlb-dialog-container',
  template: `<ng-template component-host></ng-template>`,
})
export class DialogContainerComponent extends BuilderComponent<InnerModalService> {
  @ViewChild(ComponentHostDirective, { static: true }) component!: ComponentHostDirective;

  constructor(private modalService: InnerModalService) {
    super(modalService);
    this.modalService.dialogCreate = (name: string, id: string, data: DialogData<any>) => {
      return this.buildComponent({ name, data }, { inputs: { id } });
    };
  }
}
