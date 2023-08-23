import { Directive, ElementRef, Renderer2, Input, OnDestroy, Host, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Modal } from 'bootstrap'
import { UniqueIdService } from '../../shared/unique-id.service';
import { InnerModalService } from './inner-modal.service';

@Directive({
  selector: '[rlb-dialog]',
  standalone: true
})
export class DialogDirective implements OnDestroy, AfterViewInit {

  @Input() id!: string;
  @Output() openChange: EventEmitter<void> = new EventEmitter<void>();

  private bsModal!: Modal;
  private modalElement!: HTMLElement;
  private dialogElement!: HTMLElement;
  private contentElement!: HTMLElement;
  private _closeButton!: HTMLButtonElement | null;
  private _okButton!: HTMLButtonElement | null;
  private _cancelButton!: HTMLButtonElement | null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private innerModalService: InnerModalService,
  ) {

  }
  ngAfterViewInit(): void {
    const cont = this.el.nativeElement.parentNode;
    this.modalElement = this.renderer.createElement('div');
    this.dialogElement = this.renderer.createElement('div');
    this.contentElement = this.el.nativeElement;
    this.renderer.appendChild(cont, this.modalElement);
    this.renderer.appendChild(this.modalElement, this.dialogElement);
    this.renderer.appendChild(this.dialogElement, this.contentElement);

    this.renderer.addClass(this.modalElement, 'modal');
    this.renderer.setAttribute(this.modalElement, 'id', `modal${this.id}`);
    this.renderer.setAttribute(this.modalElement, 'tabindex', '-1');
    this.renderer.addClass(this.dialogElement, 'modal-dialog');
    this.renderer.addClass(this.contentElement, 'modal-content');

    this.modalElement.addEventListener(`hide.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`hidden.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`hidePrevented.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`show.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`shown.bs.modal`, this._openChange_f)

    this.bsModal = Modal.getOrCreateInstance(this.modalElement, { backdrop: 'static', keyboard: false, focus: true });
    this.initButtons();
    this.bsModal.show();
  }

  ngOnDestroy(): void {
    this.modalElement.addEventListener(`hide.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`hidden.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`hidePrevented.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`show.bs.modal`, this._openChange_f)
    this.modalElement.addEventListener(`shown.bs.modal`, this._openChange_f)
    this.bsModal?.dispose();
  }

  private _openChange_f = (e: Event) => {
    switch (e.type) {
      case `hide.bs.offcanvas`: this.innerModalService.closeDialog(`hide`); break;
      case `hidden.bs.offcanvas`: this.innerModalService.closeDialog(`hidden`); break;
      case `hidePrevented.bs.offcanvas`: this.innerModalService.closeDialog(`hidePrevented`); break;
      case `show.bs.offcanvas`: this.innerModalService.closeDialog(`show`); break;
      case `shown.bs.offcanvas`: this.innerModalService.closeDialog(`shown`); break;
    }
  }

  initButtons(): void {
    this._closeButton = this.contentElement.querySelector('button.btn-close');
    this._cancelButton = this.contentElement.querySelector('button.btn');

    if (this._closeButton) {
      this._closeButton.addEventListener('click', () => {
        console.log('reason:close');
        this.bsModal?.hide();
      });
    }
    if (this._cancelButton) {
      this._cancelButton.addEventListener('click', () => {
        console.log('reason:cancel');
        console.log(this);
        this.modalElement.remove()
        this.bsModal?.hide();
      });
    }
  }

  open(): void {
    this.bsModal?.show();
  }

  toggle(): void {
    this.bsModal?.toggle();
  }
}

