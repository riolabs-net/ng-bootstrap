import { Component, Input, ContentChildren, QueryList, ViewContainerRef, ViewChildren, ElementRef } from '@angular/core';
import { RlbAbstractComponent } from './rlb-abstract-field.component';
import { ControlValueAccessor } from '@angular/forms';
import { RlbOptionComponent } from './rlb-options.component';


@Component({
  selector: 'rlb-radio',
  template: `
    <label class="form-label">{{ label }}</label>
    <ng-container *ngFor="let option of options;index as i">
      <div class="form-check">
        <input #input
              [attr.disabled]="disabled?true:undefined"
              [attr.readonly]="readonly?true:undefined"
              class="form-check-input" 
              type="radio" 
              [name]="id+'-radio'" 
              [id]="id+'-radio-'+i" 
              [value]="option.value"
              [checked]="value === option.value"
              (blur)="touch();"
              [ngClass]="{'is-invalid': control?.touched && control?.invalid}"
              (change)="update($event.target);">
        <label class="form-check-label" [for]="id+'-radio-'+i">
          <ng-container #content />
        </label>
      </div>
    </ng-container>
    <div class="invalid-feedback">
      {{ errors | json }}
    </div>`
})
export class RlbRadioComponent extends RlbAbstractComponent<string> implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() label: string = '';

  @ContentChildren(RlbOptionComponent) options!: QueryList<RlbOptionComponent>;
  @ViewChildren('content', { read: ViewContainerRef }) contents!: QueryList<ViewContainerRef>;

  ngAfterViewInit() {
    for (const content of this.contents) {
      content?.detach();
    }
    this.options.forEach((option, i) => {
      this.contents.get(i)?.insert(option._view);
    });
  }

  update(ev: (EventTarget | null)) {
    if (!this.disabled) {
      const t = (ev as HTMLInputElement)
      console.log(t?.value)
      this.setValue(t?.value)
    }
  }

}
