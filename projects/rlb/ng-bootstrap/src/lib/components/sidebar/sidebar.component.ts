import { Component, Input } from '@angular/core';

@Component({
  selector: 'rlb-sidebar',
  host: { 'class': 'px-sm-2 px-0 bg-dark border-end' },
  template: `
    <ng-content select="rlb-sidebar-header"></ng-content>
    <ng-content select="rlb-sidebar-body"></ng-content>
    <hr class="w-100 text-white" />
    <ng-content select="rlb-sidebar-footer"></ng-content>
    `
})
export class SidebarComponent {
}