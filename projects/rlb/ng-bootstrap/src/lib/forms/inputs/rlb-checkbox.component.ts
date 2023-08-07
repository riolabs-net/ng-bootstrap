import { Component, ElementRef, Input, Optional, Self, ViewChild, ViewRef } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { AbstractComponent } from './rlb-abstract-field.component';
import { UniqueIdService } from "../../shared/unique-id.service";

@Component({
  selector: 'rlb-checkbox',
  host: {
    class: 'd-flex flex-grow-1 flex-shrink-1 flex-auto'
  },
  template: `
  <div class="form-check">
    <label *ngIf="label && !beforeText" [for]="id" class="form-label">{{ label }}</label>
    <input #input
      class="form-check-input" 
      type="checkbox" 
      [id]="id" 
      [attr.disabled]="disabled?true:undefined" 
      [attr.readonly]="readonly?true:undefined"
      [value]="value"
      (blur)="touch();"             
      [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
      (input)="update($event.target);">
    <label *ngIf="label && beforeText" [for]="id" class="form-label">{{ label }}</label>
  </div>`
})
export class CheckboxComponent extends AbstractComponent<boolean | undefined> implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() label: string = '';
  @Input() beforeText: boolean = false
  @Input() indeterminate: boolean = false
  @ViewChild('input', { read: ElementRef }) input!: ElementRef<HTMLInputElement>;

  constructor(idService: UniqueIdService, @Self() @Optional() override control?: NgControl) {
    super(idService, control)
  }

  update(ev: (EventTarget | null)) {
    if (!this.disabled) {
      const t = (ev as HTMLInputElement)
      this.setValue(t?.checked)
    }
  }

  override writeValue(val: boolean | undefined): void {
    if (this.indeterminate && this.input) {
      if (typeof val === 'undefined' || val === null) {
        this.input.nativeElement.indeterminate = true
      } else {
        this.input.nativeElement.indeterminate = false
      }
    }
    if (!this.indeterminate) {
      val = val || false
    }
    super.writeValue(val)
  }
}
