import { Directive, ElementRef, Renderer2, Input, Component, Injectable } from '@angular/core';
import { Modal } from 'bootstrap'

@Directive({
  selector: '[rlb-dialog]',
  standalone: true
})
export class DialogDirective {

  @Input() o!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const cont = this.el.nativeElement.parentNode;
    const modal = this.renderer.createElement('div');
    const dialog = this.renderer.createElement('div');
    const content = this.el.nativeElement;
    this.renderer.appendChild(cont, modal);
    this.renderer.appendChild(modal, dialog);
    this.renderer.appendChild(dialog, content);

    this.renderer.addClass(modal, 'modal');
    this.renderer.setAttribute(modal, 'tabindex', '-1');
    this.renderer.addClass(dialog, 'modal-dialog');
    this.renderer.addClass(content, 'modal-content');
  }
}

