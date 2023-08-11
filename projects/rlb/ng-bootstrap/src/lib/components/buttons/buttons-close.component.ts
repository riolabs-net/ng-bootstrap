import { Component, Input } from '@angular/core';
import { Color, Size } from '../../shared/colors';

@Component({
  selector: 'button[rlb-button-close], a[rlb-button-close]',
  template: `<ng-content></ng-content>`,
  host: {
    'class': 'btn-close',
    'attr.type': 'button',
    'attr.aria-label': 'Close'
  }
})
export class ButtonCloseComponent {

}
