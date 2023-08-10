import { Component, ElementRef, Renderer2, Input, AfterViewInit } from "@angular/core";
import { Color } from "../../shared/colors";

@Component({
  selector: "span [rlb-badge]",
  template: "<ng-content></ng-content>",
  host: {
    '[class]': 'style',
  }
})
export class BadgeComponent implements AfterViewInit {

  @Input('pill') pill!: boolean;
  @Input('color') color: Color = 'primary'
  @Input('hidden-text') hiddenText!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  get style() {
    let style = 'badge';
    if (this.pill) {
      style += ` rounded-pill`
    }
    if (this.color) {
      style += ` bg-${this.color}`
    }
    return style;
  }

  ngAfterViewInit() {
    if (this.hiddenText) {
      const text = this.renderer.createElement('span');
      this.renderer.addClass(text, 'visually-hidden');
      this.renderer.appendChild(text, this.renderer.createText(this.hiddenText));
      this.renderer.appendChild(this.elementRef.nativeElement, text)
    }
  }
}