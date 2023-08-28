import { Color } from "@rlb/ng-bootstrap";

export interface AccordionItem {
  title: string;
  content: string;
}

export interface Accordion {
  flush?: boolean;
  alwaysOpen?: boolean;
  items: AccordionItem[];
}