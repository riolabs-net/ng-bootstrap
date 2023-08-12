import { Component, Input } from "@angular/core";

@Component({
  selector: 'li[rlb-dropdown-item]',
  template: `
    <a *ngIf="!header && !divider" class="dropdown-item" href="#" 
      [class.active]="active" 
      [class.disabled]="disabled" 
      [attr.aria-current]="active"
      [attr.aria-disabled]="disabled">
      <ng-content/>
    </a>
    <h6 *ngIf="header" class="dropdown-header"><ng-content /></h6>
    <hr *ngIf="divider" class="dropdown-divider">`,
})
export class DropdownMenuItemComponent {
  @Input() active: boolean = false;
  @Input() disabled: boolean = false;
  @Input() header: boolean = false;
  @Input() divider: boolean = false;
}