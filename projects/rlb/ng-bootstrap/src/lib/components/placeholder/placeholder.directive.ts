import { Directive, ElementRef, Renderer2, Input } from "@angular/core";
import { Color } from '../../shared/colors';

@Directive({
  selector: 'rlb-placeholder',
})
export class PlaceholderComponent {
  @Input('placeholder-color') color!: Color;
  @Input('placeholder-size') size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
  @Input('placeholder-animation') animation: 'glow' | 'fade' | 'none' = 'none';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
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
