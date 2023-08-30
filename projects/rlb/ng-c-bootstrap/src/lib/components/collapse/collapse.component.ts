import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Collapse } from './collapse.data';

@Component({
  selector: 'rlb-c-navbar',
  template: `
  <ng-template #template>
      <rlb-collapse [id]="data?.id||''" [orientation]="data?.orientation"]>
      </rlb-collapse>
  </ng-template>`
})
export class CollapseComponent implements OnInit {
  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  @Input() data!: Collapse | undefined;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
