import { Component, ViewChild, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Component({
  selector: 'rlb-navbar-form',
  template: `
  <ng-template #template>
    <form [attr.role]="role" class="d-flex">
      <ng-content />
    </form>
  </ng-template>`,
})
export class NavbarFormComponent {
  @Input() role!: string;

  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove()
  }
}