import { Directive, ElementRef, Renderer2, Input, OnDestroy, DoCheck } from '@angular/core';
import { Toast } from 'bootstrap'
import { InnerToastService } from './inner-toast.service';
import { ModalCloseReason } from '../../shared/colors';
import { IToast } from './data/toast';

@Directive({
  selector: '[rlb-toast]',
  standalone: true
})
export class ToastDirective implements OnDestroy, DoCheck {

  @Input('id') id!: string;
  @Input('data-instance') instance!: IToast

  private bsToast!: Toast;
  private modalElement!: HTMLElement;
  private dialogElement!: HTMLElement;
  private contentElement!: HTMLElement;
  private _reasonButtons!: NodeListOf<HTMLButtonElement> | null;
  private _modalReason!: ModalCloseReason;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private innerToastService: InnerToastService,
  ) { }

  ngDoCheck(): void {
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

    this.bsToast = Toast.getOrCreateInstance(this.modalElement, { animation: true, autohide: false, delay: 0 });
    this.initButtons();
    this.bsToast.show();
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
    this.bsToast?.dispose();
    this.modalElement.remove();
  }

  private _openChange_f = (e: Event) => {
    this.innerToastService.eventToast(e.type.replace('.bs.modal', ''), this._modalReason, this.id, this.instance?.result);
  }

  initButtons(): void {
    this._reasonButtons = this.contentElement.querySelectorAll('[data-dialog-reason]');
    if (this._reasonButtons && this._reasonButtons.length > 0) {
      this._reasonButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          this._modalReason = btn.getAttribute('data-dialog-reason') as ModalCloseReason;
          if (this._modalReason === 'cancel' || this._modalReason === 'close') {
            this.bsToast?.hide();
          }
          if (this._modalReason === 'ok') {
            if (this.instance.valid) {
              this.bsToast?.hide();
            }
          }
        });
      });
    }
  }
}

