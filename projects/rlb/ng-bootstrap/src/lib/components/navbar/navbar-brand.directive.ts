import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[rlb-nav-brand]',
})
export class NavbarBrandDirective {

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.addClass(elementRef.nativeElement, 'navbar-brand');
    if (elementRef.nativeElement.nodeName.toLowerCase() === 'a') {
      renderer.setAttribute(elementRef.nativeElement, 'href', `#`);
    }
  }
}
