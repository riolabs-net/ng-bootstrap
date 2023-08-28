import { Directive, ElementRef, Renderer2, Input, DoCheck } from "@angular/core";
import { Color } from '../../shared/colors';

@Directive({
  selector: '[rlb-placeholder]',
})
export class PlaceholderDirective implements DoCheck {
  @Input('placeholder-color') color!: Color;
  @Input('placeholder-size') size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input('placeholder-animation') animation: 'glow' | 'fade' | 'none' = 'none';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngDoCheck() {
    this.renderer.addClass(this.elementRef.nativeElement, 'placeholder');
    if (this.color) {
      this.renderer.addClass(this.elementRef.nativeElement, `bg-${this.color}`);
    }
    if (this.size && this.size !== 'md') {
      this.renderer.addClass(this.elementRef.nativeElement, `placeholder-${this.size}`);
    }
    if (this.animation && this.animation !== 'none') {
      this.renderer.addClass(this.elementRef.nativeElement, `placeholder-${this.animation}`);
    }
  }
}
