import { Directive, ElementRef, Renderer2, Input, OnDestroy, DoCheck, AfterViewInit } from '@angular/core';
import { Modal } from 'bootstrap'
import { InnerModalService } from './inner-modal.service';
import { ModalCloseReason } from '../../shared/types';
import { IModal } from './data/modal';
import { ModalOptions } from './data/modal-options';

@Directive({
  selector: '[rlb-modal]',
  standalone: true
})
export class ModalDirective implements OnDestroy, AfterViewInit {

  @Input('id') id!: string;
  @Input('data-instance') instance!: IModal
  @Input('data-options') options!: ModalOptions

  private bsModal!: Modal;
  private modalElement!: HTMLElement;
  private dialogElement!: HTMLElement;
  private contentElement!: HTMLElement;
  private _reasonButtons!: NodeListOf<HTMLButtonElement> | null;
  private _modalReason!: ModalCloseReason;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private innerModalService: InnerModalService,
  ) { }

  ngAfterViewInit(): void {
    const cont = this.el.nativeElement.parentNode;
    this.modalElement = this.renderer.createElement('div');
    this.dialogElement = this.renderer.createElement('div');
    this.contentElement = this.el.nativeElement;
    this.renderer.appendChild(cont, this.modalElement);
    this.renderer.appendChild(this.modalElement, this.dialogElement);
    this.renderer.appendChild(this.dialogElement, this.contentElement);
    this.renderer.addClass(this.modalElement, 'modal');
    this.renderer.addClass(this.modalElement, 'fade');
    this.renderer.setAttribute(this.modalElement, 'id', `${this.id}`);
    this.renderer.setAttribute(this.modalElement, 'tabindex', '-1');
    this.renderer.addClass(this.dialogElement, 'modal-dialog');
    this.renderer.addClass(this.contentElement, 'modal-content');
    if (this.options?.backdrop) {
      this.renderer.setAttribute(this.modalElement, 'data-bs-backdrop', `${this.options.backdrop}`);
    }
    if (this.options?.keyboard) {
      this.renderer.setAttribute(this.modalElement, 'data-bs-keyboard', `${this.options.keyboard}`);
    }
    if (this.options?.animation === false) {
      this.renderer.removeClass(this.modalElement, 'fade');
    }
    if (this.options?.scrollable) {
      this.renderer.addClass(this.dialogElement, 'modal-dialog-scrollable');
    }
    if (this.options?.verticalcentered) {
      this.renderer.addClass(this.dialogElement, 'modal-dialog-centered');
    }
    if (this.options?.size) {
      this.renderer.addClass(this.dialogElement, `modal-${this.options.size}`);
    }
    if (this.options?.fullscreen === true) {
      this.renderer.addClass(this.dialogElement, `modal-fullscreen`);
    }
    if (typeof this.options?.fullscreen === 'string' && this.options?.fullscreen) {
      this.renderer.addClass(this.dialogElement, `modal-fullscreen-${this.options.fullscreen}`);
    }
    this.modalElement.addEventListener(`hide.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`hidden.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`hidePrevented.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`show.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`shown.bs.modal`, this._openChange_f)
    this.initButtons();
    this.bsModal = Modal.getOrCreateInstance(this.modalElement, {
      backdrop: this.options?.backdrop || true,
      keyboard: this.options?.keyboard || true,
      focus: this.options?.focus || true,
    });
    this.bsModal.show();
  }

  ngOnDestroy(): void {
    this.modalElement.removeEventListener(`hide.bs.modal`, this._openChange_f)
    this.modalElement.removeEventListener(`hidden.bs.modal`, this._openChange_f)
    this.modalElement.removeEventListener(`hidePrevented.bs.modal`, this._openChange_f)
    this.modalElement.removeEventListener(`show.bs.modal`, this._openChange_f)
    this.modalElement.removeEventListener(`shown.bs.modal`, this._openChange_f)
    // this._reasonButtons?.forEach((btn) => {
    //   btn.removeEventListener('click', null);
    // });
    this.bsModal?.dispose();
    this.modalElement.remove();
  }

  private _openChange_f = (e: Event) => {
    this.innerModalService.eventModal(e.type.replace('.bs.modal', ''), this._modalReason, this.id, this.instance?.result);
  }

  initButtons(): void {
    this._reasonButtons = this.contentElement.querySelectorAll('[data-modal-reason]');
    if (this._reasonButtons && this._reasonButtons.length > 0) {
      this._reasonButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._modalReason = btn.getAttribute('data-modal-reason') as ModalCloseReason;
          if (this._modalReason === 'cancel' || this._modalReason === 'close') {
            this.bsModal?.hide();
          }
          if (this._modalReason === 'ok') {
            if (this.instance.valid) {
              this.bsModal?.hide();
            }
          }
        });
      });
    }
  }
}

