import { ChangeDetectionStrategy, Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RlbAbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from "../../shared/unique-id.service";

@Component({
  selector: 'rlb-color',
  template: `
  <label [for]="id" class="form-label">{{label}}</label>
  <input #input
         [id]="id"
         class="form-control form-control-color" 
         type="color" 
         [attr.disabled]="disabled?true:undefined" 
         [attr.readonly]="readonly?true:undefined"
         [ngClass.form-select-lg]="size === 'large'"
         [ngClass.form-select-sm]="size === 'small'"          
         [value]="value"
         (blur)="touch();"             
         [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
         (input)="update($event.target);">`
})
export class RlbColorComponent extends RlbAbstractComponent<string> implements ControlValueAccessor {
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
