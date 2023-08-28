import { Component, ElementRef, Renderer2, Input, DoCheck } from "@angular/core";
import { Color } from "../../shared/types";

@Component({
  selector: "span[rlb-badge]",
  template: "<ng-content></ng-content>",
  host: {
    '[class]': 'style',
  }
})
export class BadgeComponent implements DoCheck {

  @Input('pill') pill!: boolean | undefined;
  @Input('color') color: Color | undefined = 'primary'
  @Input('hidden-text') hiddenText!: string | undefined;

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

  ngDoCheck() {
    if (this.hiddenText) {
      const text = this.renderer.createElement('span');
      this.renderer.addClass(text, 'visually-hidden');
      this.renderer.appendChild(text, this.renderer.createText(this.hiddenText));
      this.renderer.appendChild(this.elementRef.nativeElement, text)
    }
  }
}