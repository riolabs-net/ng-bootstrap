import { ComponentData } from "./component.data";

export interface ComponentInfo<name = string, T = any> extends ComponentData<T> {
  name: name;
}

export interface ComponentCreationOptions {
  inputs?: { [key: string]: any };
}