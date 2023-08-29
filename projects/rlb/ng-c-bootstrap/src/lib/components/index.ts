import { AccordionComponent } from "./accordions/accordion.component";
import { AlertComponent } from "./alerts/alert.component";
import { BadgeComponent } from "./badges/badge.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProgressComponent } from "./progress/progress.component";
import { SpinnerComponent } from "./spinners/spinner.component";

export * from './accordions/accordion.data';
export * from './accordions/accordion.component';
export * from './alerts/alert.data';
export * from './alerts/alert.component';
export * from './badges/badge.data';
export * from './badges/badge.component';
export * from './breadcrumb/breadcrumb.data';
export * from './breadcrumb/breadcrumb.component';

export * from './carousel/carousel.data';
export * from './carousel/carousel.component';
export * from './navbar/navbar.data';
export * from './navbar/navbar.component';
export * from './progress/progress.data';
export * from './progress/progress.component';
export * from './spinners/spinner.data';
export * from './spinners/spinner.component';

export const COMPONENTS = [
  AccordionComponent,
  AlertComponent,
  BadgeComponent,
  BreadcrumbComponent,

  CarouselComponent,
  NavbarComponent,
  ProgressComponent,
  SpinnerComponent
];