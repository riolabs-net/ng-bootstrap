import { Component, Input } from '@angular/core';

@Component({
  selector: 'rlb-sidebar-body',
  host: { 'class': 'flex-grow-1', },
  template: `<ng-content select="rlb-nav"></ng-content>`
})
export class SidebarBodyComponent { }