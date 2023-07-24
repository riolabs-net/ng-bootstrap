import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RlbCheckboxComponent } from './forms/inputs/rlb-checkbox.component';
import { RlbDtCellComponent } from './data/datatable/rlb-dt-cell.component';
import { RlbDtHeaderComponent } from './data/datatable/rlb-dt-header.component';
import { RlbDtRowComponent } from './data/datatable/rlb-dt-row.component';
import { RlbFormFieldsComponent } from './forms/rlb-form-fields/rlb-form-fields.component';
import { RlbInputComponent } from './forms/inputs/rlb-input.component';
import { RlbSwitchComponent } from './forms/inputs/rlb-switch.component';
import { RlbTextAreaComponent } from './forms/inputs/rlb-text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RlbDataTableComponent } from './data/datatable/rlb-dt-table.component'
import { HelpText } from './forms/inputs/rlb-help-text.directive';
import { RlbColorComponent } from './forms/inputs/rlb-color.component';
import { RlbDatalistComponent } from './forms/inputs/rlb-datalist.component';
import { RlbRangeComponent } from './forms/inputs/rlb-range.component';
import { RlbSelectComponent } from './forms/inputs/rlb-select.component';
import { RlbRadioComponent } from './forms/inputs/rlb-radio.component';
import { RlbOptionComponent } from '../public-api';
import { RlbFileComponent } from './forms/inputs/rlb-file.component';

@NgModule({
  declarations: [
    RlbCheckboxComponent,
    RlbDtCellComponent,
    RlbDtHeaderComponent,
    RlbDtRowComponent,
    RlbDataTableComponent,
    RlbFormFieldsComponent,
    RlbInputComponent,
    RlbSwitchComponent,
    RlbTextAreaComponent,
    RlbColorComponent,
    RlbDatalistComponent,
    RlbRangeComponent,
    RlbSelectComponent,
    RlbRadioComponent,
    RlbOptionComponent,
    RlbFileComponent,
    HelpText,
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
    RlbCheckboxComponent,
    RlbDtCellComponent,
    RlbDtHeaderComponent,
    RlbDtRowComponent,
    RlbDataTableComponent,
    RlbFormFieldsComponent,
    RlbInputComponent,
    RlbSwitchComponent,
    RlbTextAreaComponent,
    RlbColorComponent,
    RlbDatalistComponent,
    RlbRangeComponent,
    RlbSelectComponent,
    RlbRadioComponent,
    RlbOptionComponent,
    RlbFileComponent,
    HelpText
  ]
})
export class RlbBootstrapModule { }
