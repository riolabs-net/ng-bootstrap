import { Component, Input } from '@angular/core';

@Component({
  selector: 'rlb-sidebar',
  host: {
    '[attr.id]': 'undefined',
    'class': 'border-end'
  },
  template: `    
  <rlb-collapse [id]="id" orientation="horizontal">
    <ng-content select="rlb-sidebar-header"></ng-content>
    <ng-content select="rlb-sidebar-body"></ng-content>
  </rlb-collapse>`
})
export class SidebarComponent {
  @Input({ required: true }) id!: string;
}