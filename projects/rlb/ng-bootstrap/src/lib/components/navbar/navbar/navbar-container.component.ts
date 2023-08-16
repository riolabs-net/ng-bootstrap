import { Component, ElementRef, Input } from "@angular/core";

@Component({
  selector: 'ul[rlb-navbar-container], form[rlb-navbar-container]',
  template: `
    <ng-container *ngIf="isList; else e">
      <ng-content select="li[rlb-navbar-item]" />
    </ng-container>
    <ng-template #e>
      <ng-content />
    </ng-template> 
    `,
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