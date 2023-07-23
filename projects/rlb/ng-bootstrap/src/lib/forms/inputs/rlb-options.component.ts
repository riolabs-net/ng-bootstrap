import { Component, Input, ViewContainerRef, Injector } from '@angular/core';
import { WrappedComponent } from '../../shared/wrapped.component';
import { HostWrapper } from '../../shared/host-wrapper';

@Component({
    selector: 'rlb-option',
    template: `<ng-content></ng-content>`
})
export class RlbOptionComponent {

    @Input() disabled = false;
    @Input() value = false;

    private wrappedInjector!: Injector;

    constructor(private vcr: ViewContainerRef) { }

    get _view() {
        return this.wrappedInjector.get(WrappedComponent, this.vcr).componentView;
    }

    ngOnInit() {
        this.wrappedInjector = new HostWrapper(WrappedComponent, this.vcr);
    }
}