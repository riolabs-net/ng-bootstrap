import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from "@angular/core";

@Directive({
  selector: `
    a[rlb-button][toggle], 
    a[rlb-button-close][toggle],
    button[rlb-button][toggle],
    button[rlb-button-close][toggle],
    rlb-button-toolbar[toogle]`,
})
export class ToggleDirective implements AfterViewInit {
  @Input('toggle') toggle!: 'offcanvas' | 'collapse' | 'dropdown' | 'tab' | 'buttons-toolbar' | 'buttons-group'
  @Input({ alias: 'toggle-target', required: true }) target!: string;
  @Input() collapsed: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-bs-toggle', this.toggle);
    if (this.elementRef.nativeElement.nodeName.toLowerCase() === 'a') {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'href', `#${this.target}`);
    } else {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'data-bs-target', `#${this.target}`);
    }
    if (this.collapsed) {
      this.renderer.addClass(this.elementRef.nativeElement, 'collapsed');
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-expanded', 'true');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'collapsed');
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-expanded', 'false');
    }
    this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-controls', this.target);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-expanded', 'false');
  }
}
