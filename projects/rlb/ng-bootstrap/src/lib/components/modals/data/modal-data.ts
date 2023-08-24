import { ModalType } from "../../../shared/colors";
import { ModalOptions } from "./modal-options";

export interface ModalData<T = any> {
  options?: ModalOptions,
  title: string,
  type?: ModalType,
  content: T | undefined,
  ok?: string,
}