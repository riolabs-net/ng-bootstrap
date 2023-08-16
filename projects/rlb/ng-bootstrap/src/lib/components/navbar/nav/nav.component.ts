import { Component, ElementRef, Input } from "@angular/core";

@Component({
  selector: 'ul[rlb-nav]',
  template: `<ng-content select="li" />`,
  host: {
    'class': 'nav',
    '[class.nav-tabs]': 'isTab',
    '[class.justify-content-center]': 'horizontalAlignment === "center"',
    '[class.justify-content-end]': 'horizontalAlignment === "end"',
    '[class.flex-column]': 'vertical',
    '[class.nav-pills]': 'pills',
    '[class.nav-underline]': 'underline',
    '[class.nav-fill]': 'fill === "fill"',
    '[class.nav-justified]': 'fill === "justified"'
  }
})
export class NavComponent {
  @Input() isTab: boolean = false;
  @Input() horizontalAlignment!: 'center' | 'end'
  @Input() vertical: boolean = false;
  @Input() pills: boolean = false;
  @Input() underline: boolean = false;
  @Input() fill!: 'fill' | 'justified' 
}