import { Component, Input, AfterContentChecked, HostBinding, ContentChildren, QueryList, AfterViewChecked } from '@angular/core';
import { UniqueIdService } from '../../shared/unique-id.service';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'rlb-accordion',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'accordion',
    '[id]': 'id',
  },
})
export class AccordionComponent implements AfterContentChecked {
  @Input() flush: boolean = false;
  @Input() alwaysOpen: boolean = false;
  @Input() id!: string;
 // @HostBinding('class.accordion-flush') get accordionFlush() { return this.flush; }
  @ContentChildren(AccordionItemComponent) public items!: QueryList<AccordionItemComponent>;
  constructor(private idService: UniqueIdService) { }

  ngAfterContentChecked(): void {
    if (!this.id) {
      this.id = `accordion${this.idService.id}`;
    }

    if (this.items) {
      this.items.forEach(item => {
        item.parentId = this.id;
        item.alwaysOpen = this.alwaysOpen;
      });
    }
  }
}
