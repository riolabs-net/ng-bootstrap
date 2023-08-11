import { Directive, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
  selector: '[rlb-collapse]',
})
export class CollapseDirective {
  @Input({ alias: 'rlb-collapse', required: true }) collapse!: string;
  @Input() open: boolean = false;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'data-bs-toggle', 'collapse');
    if (this.elementRef.nativeElement.nodeName.toLowerCase() === 'a') {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'href', `#${this.collapse}`);
    } else {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'data-bs-target', `#${this.collapse}`);
    }
    if (this.open) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'collapsed');
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-expanded', 'false');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'collapsed');
      this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-expanded', 'true');
    }
    this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-controls', this.collapse);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-expanded', 'false');
  }
}
