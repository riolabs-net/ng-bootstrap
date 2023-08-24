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
import { ComponentHostDirective } from './shared/component-builder/component-host.directive';
import { ModalRegistryOptions } from './components/modals/rlb-modal-registry.options';
import { DemoComponent } from 'src/app/demo/demo.component';
import { COMPONENT_BUILDER } from './shared/component-builder';

@NgModule({
  declarations: [
    ...TABLE,
    ...INPUTS,
    ...COMPONENTS,
    ...COMPONENT_BUILDER,
    FormFieldsComponent,
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
    ...COMPONENT_BUILDER,
    FormFieldsComponent
  ]
})
export class RlbBootstrapModule { }
