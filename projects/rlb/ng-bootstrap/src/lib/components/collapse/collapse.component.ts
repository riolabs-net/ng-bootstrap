import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Collapse } from 'bootstrap';
import { ToggleAbstractComponent } from '../abstract/toggle-abstract.component';

@Component({
  selector: 'rlb-collapse',
  template: `
  <div class="collapse" [id]="id" [class.collapse-horizontal]="orientation === 'horizontal'">
    <ng-content></ng-content>
  </div>`,
  host: { '[attr.id]': 'undefined' }
})
export class CollapseComponent extends ToggleAbstractComponent<Collapse> implements OnInit, OnDestroy {

  @Input({ alias: `id`, required: true }) id!: string;
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';

  constructor(elementRef: ElementRef<HTMLElement>) {
    super(elementRef)
  }

  override getOrCreateInstance(element: HTMLElement): Collapse {
    return Collapse.getOrCreateInstance(element, { toggle: false })
  }

  override get eventPrefix(): string {
    return 'bs.collapse'
  }
}
