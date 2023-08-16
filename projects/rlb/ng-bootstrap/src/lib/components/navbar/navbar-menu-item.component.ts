import { Component, ElementRef, Renderer2, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: 'li[rlb-navbar-item], span[rlb-navbar-item]',
  template: `
    <a *ngIf="!isContainer && !isSpan; else e" 
      class="nav-link" 
      [attr.aria-current]="active?'page':undefined"
      [attr.aria-disabled]="disabled?'true':undefined"
      [class.disabled]="disabled"
      [class.active]="active"
      href="#">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </a>
    <ng-template #e>
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </ng-template>
    <ng-template #content><ng-content /></ng-template>
    `,
  host: {
    'class': 'nav-item',
    '[class.navbar-text]': 'isSpan',
  }
})
export class NavbarMenuItemComponent {

  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isContainer: boolean = false;
  @Input() isSpan: boolean = false;
  constructor(elementRef: ElementRef) {
    if (elementRef.nativeElement.nodeName.toLowerCase() === 'span') {
      this.isSpan = true;
    }
  }
}
