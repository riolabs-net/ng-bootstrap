import { Directive, ElementRef, Renderer2, Input, OnDestroy, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Modal } from 'bootstrap'
import { InnerModalService } from './inner-modal.service';
import { ModalCloseReason } from '../../shared/colors';

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
    this.renderer.setAttribute(this.modalElement, 'id', `${this.id}`);
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
    this.innerModalService.eventDialog(e.type.replace('.bs.modal', ''), this._modalReason, this.id);
  }

  initButtons(): void {
    this._reasonButtons = this.contentElement.querySelectorAll('[data-dialog-reason]');
    if (this._reasonButtons && this._reasonButtons.length > 0) {
      this._reasonButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._modalReason = btn.getAttribute('data-dialog-reason') as ModalCloseReason;
          if (this._modalReason === 'cancel' || this._modalReason === 'close') {
            this.bsModal?.hide();
          }
        });
      });
    }
  }
}

