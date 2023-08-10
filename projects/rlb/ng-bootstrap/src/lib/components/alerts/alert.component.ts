import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../../shared/colors';

@Component({
  selector: 'rlb-alert',
  template: `
    <div class="alert alert-{{color}}" role="alert">
      <ng-content></ng-content>
      <button *ngIf="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" (click)="dismissed.emit()"></button>
    </div>`
})
export class AlertComponent {
  @Input() color: Color = 'primary';
  @Input() dismissible = false;
  @Output() dismissed: EventEmitter<void> = new EventEmitter<void>();
}
