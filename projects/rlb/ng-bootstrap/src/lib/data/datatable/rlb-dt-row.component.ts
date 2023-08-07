import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tr[rlb-dt-row]',
  template: `<ng-content select="td[rlb-dt-cell]" />`
})
export class DtRowComponent {}
