import { Component, ViewChild, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Component({
  selector: 'rlb-navbar-text',
  template: `
  <ng-template #template>
    <span class="navbar-text">
      <ng-content />
    </span>
  </ng-template>`,
})
export class NavbarTextComponent {
  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove()
  }
}