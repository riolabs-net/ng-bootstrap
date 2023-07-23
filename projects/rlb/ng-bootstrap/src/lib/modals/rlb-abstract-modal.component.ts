import { Input, Injectable } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { DialogData, DialogResult } from './dialog-data'

@Injectable()
export class RlbAbstractModalComponent<In = any, Out = any> {

  @Input() data!: DialogData<In>

  constructor(protected activeModal: NgbActiveModal) { }

  protected close(result: DialogResult<Out>) {
    this.activeModal.close(result);
  }
}