import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { TABLE } from './data/datatable';
import { INPUTS } from './forms/inputs';
import { COMPONENTS } from './components';
import { FormFieldsComponent } from './forms/rlb-form-fields/rlb-form-fields.component';

@NgModule({
  declarations: [
    ...TABLE,
    ...INPUTS,
    ...COMPONENTS,
    FormFieldsComponent
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
    ...COMPONENTS,
    FormFieldsComponent
  ]
})
export class RlbBootstrapModule { }
