import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RlbAbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from "../../shared/unique-id.service";

@Component({
  selector: 'rlb-file',
  template: `
    <label [for]="id" class="form-label">{{label}}</label>
    <input #input
           [id]="id" 
           type="file" 
           class="form-control"
           [attr.disabled]="disabled?true:undefined" 
           [attr.readonly]="readonly?true:undefined"
           [class.form-control-lg]="size === 'large'"
           [class.form-control-sm]="size === 'small'"
           (blur)="touch()"
           [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
           (change)="update($event.target)"
           [value]="value">
    <div class="invalid-feedback">
      {{ errors | json }}
    </div>`
})
export class RlbFileComponent extends RlbAbstractComponent<string> implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() label: string = '';
  @Input() size: "small" | "large" | undefined = undefined

  constructor(idService: UniqueIdService, @Self() @Optional() override control?: NgControl) {
    super(idService, control)
  }

  update(ev: (EventTarget | null)) {
    if (!this.disabled) {
      const t = (ev as HTMLInputElement)
      this.setValue(t?.value)
    }
  }
}
