import { AccordionBodyComponent } from './accordions/accordion-body.component';
import { AccordionHeaderComponent } from './accordions/accordion-header.component';
import { AccordionItemComponent } from './accordions/accordion-item.component';
import { AccordionComponent } from './accordions/accordion.component';
import { AlertComponent } from './alerts/alert.component';
import { BadgeComponent } from './badges/badge.component';
import { BadgeDirective } from './badges/badge.directive';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './buttons/buttons.component';

export * from './alerts/alert.component';
export * from './breadcrumb/breadcrumb.component';
export * from './accordions/accordion.component';
export * from './accordions/accordion-item.component';
export * from './accordions/accordion-header.component';
export * from './accordions/accordion-body.component';
export * from './buttons/buttons.component';
export * from './badges/badge.directive';
export * from './badges/badge.component';

export const COMPONENTS = [
  AlertComponent,
  BreadcrumbComponent,
  AccordionComponent,
  AccordionItemComponent,
  AccordionHeaderComponent,
  AccordionBodyComponent,
  ButtonComponent,
  BadgeDirective,
  BadgeComponent
]