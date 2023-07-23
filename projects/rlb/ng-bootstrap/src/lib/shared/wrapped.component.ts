import { AfterViewInit, Component, EmbeddedViewRef, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { DynamicWrapper } from './dynamic-wrapper';

@Component({
  selector: 'rlb-wrapped-component',
  template: `
    <ng-template #portal>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class WrappedColumn implements DynamicWrapper, AfterViewInit, OnDestroy {
  _dynamic = false;

  @ViewChild('portal') templateRef!: TemplateRef<void>;
  columnView!: EmbeddedViewRef<void>; // the component projected view (in memory)

  ngAfterViewInit() {
    // Create the inner components in memory, not the DOM.
    this.columnView = this.templateRef.createEmbeddedView();
  }

  ngOnDestroy() {
    this.columnView.destroy();
  }
}