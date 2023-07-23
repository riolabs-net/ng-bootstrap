import { Component, Injector, Input, ViewContainerRef } from '@angular/core';
import { WrappedComponent } from '../../shared/wrapped.component';
import { HostWrapper } from '../../shared/host-wrapper';



@Component({
  selector: 'th[rlb-dt-header]',
  template: `<ng-content></ng-content>`
})
export class RlbDtHeaderComponent {
  private wrappedInjector!: Injector;
  @Input() field!: string
  @Input() type!: 'number' | 'string'
  @Input() sortable!: boolean
  @Input() filtrable!: boolean

  constructor(private vcr: ViewContainerRef) { }

  get _view() {
    return this.wrappedInjector.get(WrappedComponent, this.vcr).componentView;
  }

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedComponent, this.vcr);
  }

}
