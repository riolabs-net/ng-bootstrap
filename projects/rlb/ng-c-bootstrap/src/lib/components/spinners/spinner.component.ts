import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Spinner } from './spinner.data';

@Component({
  selector: 'rlb-c-spinner',
  template: `
  <ng-template #template>
    <rlb-spinner [color]="data?.color || 'primary'" [style]="data?.style" [size]="data?.size" />
  </ng-template>`
})
export class SpinnerComponent implements OnInit {
  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  @Input() data!: Spinner | undefined;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
