import { Component, Renderer2, Input, ViewChild, ViewContainerRef, TemplateRef } from "@angular/core";
import { Color } from "../../shared/types";

@Component({
  selector: "span[rlb-badge]",
  template: `
    <ng-template #template>
      <span [class]="style">
        <ng-content></ng-content>
        <span *ngIf="hiddenText" class="visually-hidden">{{hiddenText}}</span>
      </span>
    </ng-template>`,
})
export class BadgeComponent {

  @Input('pill') pill!: boolean | undefined;
  @Input('color') color: Color | undefined = 'primary'
  @Input('hidden-text') hiddenText!: string | undefined;

  constructor(private viewContainerRef: ViewContainerRef) { }

  get style() {
    let style = 'badge';
    if (this.pill) {
      style += ` rounded-pill`
    }
    if (this.color) {
      style += ` bg-${this.color}`
    }
    return style;
  }

  @ViewChild('template', { static: true }) template!: TemplateRef<any>;

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
    this.viewContainerRef.element.nativeElement.remove()
  }
}