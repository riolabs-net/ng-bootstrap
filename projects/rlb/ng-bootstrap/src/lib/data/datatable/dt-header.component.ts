import { Component, Injector, Input, ViewContainerRef } from '@angular/core';
import { HostWrapper } from '../../shared/host-wrapper';
import { WrappedComponent } from '../../shared/wrapped.component';


@Component({
  selector: 'th[rlb-dt-header]',
  template: `<ng-content></ng-content>`
})
export class DataTableHeaderComponent {
  private wrappedInjector!: Injector;
  @Input() field!: string
  @Input() type!: 'number' | 'string'
  @Input() sortable!: boolean
  @Input() filtrable!: boolean

  constructor(private vcr: ViewContainerRef) { }

  get _view() {
    return this.wrappedInjector.get(WrappedComponent, this.vcr).columnView;
  }

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedComponent, this.vcr);
  }
}
