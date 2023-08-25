import { ModalType } from "../../../shared/colors";

export interface ToastData<T = any> {
  title: string,
  type?: ModalType,
  content: T | undefined,
  ok?: string,
}