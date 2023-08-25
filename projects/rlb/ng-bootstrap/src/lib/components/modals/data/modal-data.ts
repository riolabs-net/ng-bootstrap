import { ModalType } from "../../../shared/colors";

export interface ModalData<T = any> {
  title: string,
  type?: ModalType,
  content: T | undefined,
  ok?: string,
}