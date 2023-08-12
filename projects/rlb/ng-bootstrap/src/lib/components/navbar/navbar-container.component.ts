import { Component, ElementRef, Renderer2, Input } from "@angular/core";

@Component({
  selector: 'ul[rlb-nav-container], form[rlb-nav-container]',
  template: '<ng-content select="li[rlb-nav-item]" />',
  host: {
    '[attr.role]': 'role',
    '[class.navbar-nav]': 'isList',
    '[class.d-flex]': '!isList',
    '[class.navbar-nav-scroll]': 'scroll',
    '[style.--bs-scroll-height]': 'scroll'
  }
})
export class NavbarContainerComponent {
  @Input() role!: string;
  @Input() scroll!: string;
  isList = false;

  constructor(private elementRef: ElementRef) {
    if (this.elementRef.nativeElement.nodeName.toLowerCase() === 'ul') {
      this.isList = true;
    }
  }
}