import { ModalType } from "../../../shared/colors";
import { ToastOptions } from "./toast-options";

export interface ToastData<T = any> {
  options?: ToastOptions,
  title: string,
  type?: ModalType,
  content: T | undefined,
  ok?: string,
}