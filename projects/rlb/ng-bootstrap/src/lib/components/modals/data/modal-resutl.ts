import { ModalCloseReason } from "../../../shared/colors";

export interface ModalResult<T = void> {
  reason: ModalCloseReason
  result: T | null,
}
