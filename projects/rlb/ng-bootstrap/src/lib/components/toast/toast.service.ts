import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { InnerToastService } from './inner-toast.service'
import { ToastData } from './data/toast-data'
import { ToastResult } from './data/toast-resutl'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private modalService: InnerToastService) { }

  public openToast<Input = any, Output = any>(name: string, data: ToastData<Input>): Observable<ToastResult<Output> | null> {
    return this.modalService.openToast<Input, Output>(name, data)
  }
}