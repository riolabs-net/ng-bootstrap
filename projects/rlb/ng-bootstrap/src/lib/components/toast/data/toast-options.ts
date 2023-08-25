import { Color } from "../../../shared/colors";

export interface ToastOptions {
  animation?: boolean;
  autohide?: boolean;
  delay?: number;
  color?: Color;
  classes?: string[];
}
