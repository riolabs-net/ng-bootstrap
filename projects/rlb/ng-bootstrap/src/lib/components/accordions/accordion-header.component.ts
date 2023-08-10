import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'h2[rlb-accordion-header]',
  template: `
      <button class="accordion-button" 
        [ngClass]="{'collapsed':!expanded}" 
        type="button" 
        data-bs-toggle="collapse" 
        [attr.data-bs-target]="'#'+itemId"
        attr.aria-expanded="{{expanded}}" 
        [attr.aria-controls]="itemId">
        <ng-content></ng-content>
      </button>`,
  host: {
    class: 'accordion-header'
  },
})
export class AccordionHeaderComponent {

  public parentId!: string
  public itemId!: string
  public expanded: boolean = false
}