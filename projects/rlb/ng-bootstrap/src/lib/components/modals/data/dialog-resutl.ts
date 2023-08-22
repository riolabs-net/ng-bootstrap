import { ModalCloseReason } from "../../../shared/colors";

export interface DialogResult<T = void> {
  reason: ModalCloseReason
  result: T | null,
}
