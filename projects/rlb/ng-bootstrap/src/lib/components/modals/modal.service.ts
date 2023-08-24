import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { InnerModalService } from './inner-modal.service'
import { ModalData } from './data/modal-data'
import { ModalResult } from './data/modal-resutl'



@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: InnerModalService) { }

  public openModal<Input = any, Output = any>(name: string, data: ModalData<Input>): Observable<ModalResult<Output> | null> {
    return this.modalService.openModal<Input, Output>(name, data)
  }
}