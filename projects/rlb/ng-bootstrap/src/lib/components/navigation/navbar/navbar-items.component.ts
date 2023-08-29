import { Component, ViewContainerRef, Input, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: 'rlb-navbar-items',
  template: `
    <ng-template #template>
      <ul [class]="'navbar-nav '+ classList" [class.navbar-nav-scroll]="scroll" [style.--bs-scroll-height]="scroll" >
        <ng-content select="a[rlb-navbar-item]" />
      </ul>
    </ng-template>`,
})
export class NavbarItemsComponent {
  @Input() scroll!: string;
  @Input('class') classList!: string;

  @ViewChild('template', { static: true }) template!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove()
  }
}