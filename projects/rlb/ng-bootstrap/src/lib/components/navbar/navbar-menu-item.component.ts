import { Component, ElementRef, Renderer2, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: 'li[rlb-nav-item], span[rlb-nav-item]',
  template: `
    <a *ngIf="!isContainer && !isSpan" 
      class="nav-link active" 
      [attr.aria-current]="active?'page':undefined"
      [attr.aria-disabled]="disabled?'true':undefined"
      [class.disabled]="disabled"
      href="#">
        <ng-content></ng-content>
    </a>
    <ng-content *ngIf="isSpan || isContainer" />`,
  host: {
    'class': 'nav-item',
    '[class.navbar-text]': 'isSpan',
  }
})
export class NavbarMenuItemComponent implements AfterViewInit {

  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() isContainer: boolean = false;
  @Input() isSpan: boolean = false;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    if (this.elementRef.nativeElement.nodeName.toLowerCase() === 'span') {

    }
  }
}
