import { Component, Input } from '@angular/core';

@Component({
  selector: 'rlb-sidebar-body',
  template: `<ng-content select="[rlb-nav]"></ng-content>`
})
export class SidebarBodyComponent { }