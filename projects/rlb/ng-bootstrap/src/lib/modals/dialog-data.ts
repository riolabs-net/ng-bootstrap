export type DialogCloseReason = "ok" | "cancel" | "close"
export type DialogType = "success" | "info" | "warning" | "error"

export interface DialogData<T = any> {
  title: string,
  type?: DialogType,
  content: T | undefined,
  ok?: string,
}

export interface DialogResult<T = void> {
  reason: DialogCloseReason
  result: T | null,
}