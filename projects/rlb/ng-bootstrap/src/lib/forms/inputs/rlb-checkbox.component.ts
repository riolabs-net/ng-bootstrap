import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RlbAbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from "../../shared/unique-id.service";

@Component({
  selector: 'rlb-checkbox',
  template: `
  <div class="form-check form-switch">
    <label class="form-check-label" [for]="id">
      <span *ngIf="beforeText">{{ label }}</span>
      <input 
        class="form-check-input" 
        type="checkbox" 
        [id]="id" 
        [attr.disabled]="disabled?true:undefined" 
        [attr.readonly]="readonly?true:undefined" 
        [ngClass.form-select-lg]="size === 'large'"
        [ngClass.form-select-sm]="size === 'small'" 
        [value]="value"
        (blur)="touch();"             
        [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
        (input)="update($event.target);">
      <span *ngIf="!beforeText">{{ label }}</span>
    </label>
  </div>`
})
export class RlbCheckboxComponent extends RlbAbstractComponent<boolean> implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() label: string = '';
  @Input() beforeText: boolean = false
  @Input() size: "small" | "large" | undefined = undefined

  constructor(idService: UniqueIdService, @Self() @Optional() override control?: NgControl) {
    super(idService, control)
  }

  update(ev: (EventTarget | null)) {
    if (!this.disabled) {
      const t = (ev as HTMLInputElement)
      this.setValue(t?.checked)
    }
  }
}
