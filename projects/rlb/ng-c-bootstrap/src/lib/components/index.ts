import { AlertComponent } from "./alerts/alert.component";
import { BadgeComponent } from "./badges/badge.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ProgressComponent } from "./progress/progress.component";
import { SpinnerComponent } from "./spinners/spinner.component";

export * from './alerts/alert.data';
export * from './alerts/alert.component';
export * from './badges/badge.data';
export * from './badges/badge.component';
export * from './breadcrumb/breadcrumb.data';
export * from './breadcrumb/breadcrumb.component';

export * from './progress/progress.data';
export * from './progress/progress.component';
export * from './spinners/spinner.data';
export * from './spinners/spinner.component';

export const COMPONENTS = [
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,

  ProgressComponent,
  SpinnerComponent
];