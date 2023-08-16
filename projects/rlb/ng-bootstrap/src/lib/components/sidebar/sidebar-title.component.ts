import { Component } from "@angular/core";

@Component({
  selector: 'h*[rlb-sidebar-title]',
  template: `<ng-content></ng-content>`,
  host: { 'class': 'sidebar-title' }
})
export class SidebarTitleComponent { }
