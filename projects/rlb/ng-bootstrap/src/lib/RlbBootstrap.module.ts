import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TABLE } from './data/datatable';
import { RlbFormFieldsComponent } from './forms/rlb-form-fields/rlb-form-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { INPUTS } from '../lib/forms/inputs';

@NgModule({
  declarations: [
    ...TABLE,
    ...INPUTS,
    RlbFormFieldsComponent
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
    ...TABLE,
    ...INPUTS,
    RlbFormFieldsComponent
  ]
})
export class RlbBootstrapModule { }
