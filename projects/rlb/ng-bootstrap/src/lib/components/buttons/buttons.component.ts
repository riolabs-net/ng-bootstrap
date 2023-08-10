import { Component, Input } from '@angular/core';
import { Color, Size } from '../../shared/colors';

@Component({
  selector: 'button[type="button"], a.btn,button.btn',
  template: `<ng-content></ng-content>`,
  host: {
    '[class]': 'mainClass',
    '[disabled]': 'disabled'
  }
})
export class ButtonComponent {
  @Input() color: Color = 'primary';
  @Input() size: Size = 'md';
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;

  get mainClass() {
    let style = 'btn';
    if (this.outline) {
      style += ` btn-outline-${this.color}`;
    } else {
      style += ` btn-${this.color}`;
    }
    if (this.size !== 'md') {
      style += ` btn-${this.size}`;
    }
    return style;
  }
}
