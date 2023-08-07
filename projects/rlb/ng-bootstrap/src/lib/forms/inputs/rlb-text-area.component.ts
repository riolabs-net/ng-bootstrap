import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { AbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from '../../shared/unique-id.service';

@Component({
  selector: 'rlb-textarea',
  host: {
    class: 'd-flex flex-grow-1 flex-shrink-1 flex-auto'
  },
  template: `
    <label *ngIf="label" [for]="id" class="form-label">{{ label }}</label>
    <div class="input-group has-validation">
      <textarea [id]="id"
             class="form-control" 
             [attr.disabled]="disabled?true:undefined"
             [attr.readonly]="readonly?true:undefined"
             [attr.placeholder]="placeholder"
             [class.form-select-lg]="size === 'large'"
             [class.form-select-sm]="size === 'small'"
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
export class TextAreaComponent extends AbstractComponent<string> implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() label: string = '';
  @Input() beforeText: boolean = false
  @Input() placeholder!: string
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
