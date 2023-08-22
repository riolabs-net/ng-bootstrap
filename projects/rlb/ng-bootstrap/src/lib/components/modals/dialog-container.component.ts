import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BuilderComponent } from '../../shared/component-builder/builder.component';
import { InnerModalService } from './inner-modal.service';
import { ComponentHostDirective } from '../../shared/component-builder/component-host.directive';
import { DialogData } from './data/dialog-data';
;

@Component({
  selector: 'rlb-dialog-container',
  template: `<ng-template component></ng-template>`,
})
export class DialogContainerComponent extends BuilderComponent<InnerModalService> implements OnInit {
  @ViewChild(ComponentHostDirective, { static: true }) component!: ComponentHostDirective;
  @Input() data!: any;

  constructor(private modalService: InnerModalService) {
    super(modalService);
  }

  ngOnInit(): void {
    this.modalService.dialogCreate = (name: string, data: DialogData<any>) => {
      return this.buildComponent({ name, data });
    };
  }
}
