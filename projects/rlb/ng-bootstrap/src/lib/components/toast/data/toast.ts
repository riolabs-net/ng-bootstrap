import { ComponentData } from "../../../shared/component-builder";
import { ToastData } from "./toast-data";

export interface IModal<Input = any, Output = any> extends ComponentData<ToastData<Input>> {
  valid?: boolean;
  result?: Output;
}