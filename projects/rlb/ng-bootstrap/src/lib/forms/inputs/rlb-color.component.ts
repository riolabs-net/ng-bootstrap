import { ChangeDetectionStrategy, Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RlbAbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from "../../shared/unique-id.service";

@Component({
  selector: 'rlb-color',
  host: {
    class: 'd-flex flex-grow-1 flex-shrink-1 flex-auto'
  },
  template: `
  <label *ngIf="label" [for]="id" class="form-label">{{ label }}</label>
  <input #input
         [id]="id"
         class="form-control form-control-color" 
         type="color" 
         [attr.disabled]="disabled?true:undefined" 
         [attr.readonly]="readonly?true:undefined"
         [class.form-control-lg]="size === 'large'"
         [class.form-control-sm]="size === 'small'"          
         [value]="value"
         (blur)="touch();"             
         [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
         (input)="update($event.target);">
  <div class="invalid-feedback">
    {{ errors | json }}
  </div>`
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
