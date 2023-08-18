import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'rlb-sidebar',
  host: {
    'class': 'bg-dark border-end sidebar active',
    '[id]': 'id',
    '[style.flex-basis]': 'width',
  },
  template: `
  <div class="d-flex flex-column h-100">
    <ng-content select="rlb-sidebar-header"></ng-content>
    <ng-content select="rlb-sidebar-body"/>
    <ng-content select="rlb-sidebar-footer"></ng-content>
  </div>
    `
})
export class SidebarComponent {
  @Input() id!: string;
  @Input() width: string = '250px';
  @Input() collapsed: boolean = false;
  @Input() position: 'start' | 'end' = 'start';
}