import { ModalType } from "../../../shared/colors";
import { ComponentData } from "../../../shared/component-builder/component.data";
import { DialogOptions } from "./dialog-options";

export interface DialogData<T = any> {
  options?: DialogOptions,
  title: string,
  type?: ModalType,
  content: T | undefined,
  ok?: string,
}

export interface IDialog<T> extends ComponentData<DialogData<T>> { }