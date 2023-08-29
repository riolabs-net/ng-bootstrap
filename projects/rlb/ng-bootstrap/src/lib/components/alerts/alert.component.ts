import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Color } from '../../shared/types';

@Component({
  selector: 'rlb-alert',
  template: `
  <ng-template #template>
    <div class="alert alert-{{color}}" role="alert">
      <ng-content></ng-content>
      <button *ngIf="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" (click)="dismissed.emit()"></button>
    </div>
  </ng-template>`
})
export class AlertComponent {
  @Input() color: Color = 'primary';
  @Input() dismissible = false;
  @Output() dismissed: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove()
  }
}
