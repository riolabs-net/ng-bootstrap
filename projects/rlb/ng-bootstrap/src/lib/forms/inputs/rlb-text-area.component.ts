import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RlbAbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from '../../shared/unique-id.service';

@Component({
  selector: 'rlb-textarea',
  template: `
    <label [for]="id" class="form-label">{{ label }}</label>
    <div class="input-group has-validation">
      <textarea [id]="id"
             class="form-control" 
             [attr.disabled]="disabled?true:undefined"
             [attr.readonly]="readonly?true:undefined"
             [value]="value"
             (blur)="touch();"             
             [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
             (input)="update($event.target);"
             ></textarea>
        <div class="invalid-feedback">
          {{errors | json }}
        </div>
      </div>`
})
export class RlbTextAreaComponent extends RlbAbstractComponent<string> implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() label: string = '';
  @Input() beforeText: boolean = false
  @Input() placeholder!: string

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
