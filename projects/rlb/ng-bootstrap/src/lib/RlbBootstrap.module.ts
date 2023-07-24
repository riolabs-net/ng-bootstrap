import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RlbDtCellComponent } from './data/datatable/rlb-dt-cell.component';
import { RlbDtHeaderComponent } from './data/datatable/rlb-dt-header.component';
import { RlbDtRowComponent } from './data/datatable/rlb-dt-row.component';
import { RlbFormFieldsComponent } from './forms/rlb-form-fields/rlb-form-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RlbDataTableComponent } from './data/datatable/rlb-dt-table.component'
import { INPUTS } from '../lib/forms/inputs';

@NgModule({
  declarations: [
    RlbDtCellComponent,
    RlbDtHeaderComponent,
    RlbDtRowComponent,
    RlbDataTableComponent,
    RlbFormFieldsComponent,
    ...INPUTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    RlbDtCellComponent,
    RlbDtHeaderComponent,
    RlbDtRowComponent,
    RlbDataTableComponent,
    RlbFormFieldsComponent,
    ...INPUTS
  ]
})
export class RlbBootstrapModule { }
