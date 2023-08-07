import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { AbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from "../../shared/unique-id.service";

@Component({
  selector: 'rlb-input-group',
  host: {
    class: 'input-group has-validation',
    '[class.input-group-sm]': 'size === "small"',
    '[class.input-group-lg]': 'size === "large"'
  },
  template: `<ng-content></ng-content>`
})
export class InputGroupComponent {
  @Input() size: "small" | "large" | undefined = undefined
}


@Component({
  selector: 'rlb-input-text-group',
  host: { class: 'input-group-text' },
  template: `<ng-content></ng-content>`
})
export class InputTextGroupComponent { }