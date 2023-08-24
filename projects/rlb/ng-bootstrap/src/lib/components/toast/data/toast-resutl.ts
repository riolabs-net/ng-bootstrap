import {ToastCloseReason } from "../../../shared/colors";

export interface ToastResult<T = void> {
  reason: ToastCloseReason
  result: T | null,
}
