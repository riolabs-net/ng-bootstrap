import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { TABLE } from './data/datatable';
import { INPUTS } from './forms/inputs';
import { COMPONENTS } from './components';
import { FormFieldsComponent } from './forms/rlb-form-fields/rlb-form-fields.component';
import { ModalRegistryOptions } from './components/modals/options/modal-registry.options';
import { DemoComponent } from 'src/app/demo/demo.component';
import { COMPONENT_BUILDER } from './shared/component-builder';
import { FOR_ROOT_OPTIONS_TOKEN, RlbBootstrapOptions } from './rlb-bootstrap';
import { modalRegistryProvider } from './components/modals/providers/modal-registry.provider';
import { ModalRegistry } from './components/modals/options/modal-registry';

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
export class RlbBootstrapModule {
  static forRoot(options?: RlbBootstrapOptions): ModuleWithProviders<RlbBootstrapModule> {
    return ({
      ngModule: RlbBootstrapModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useValue: options
        },
        {
          provide: ModalRegistryOptions,
          useFactory: modalRegistryProvider(),
          deps: [FOR_ROOT_OPTIONS_TOKEN],
          multi: true,
        }
      ]
    });
  }

  static forChild(options?: ModalRegistry): ModuleWithProviders<RlbBootstrapModule> {
    return ({
      ngModule: RlbBootstrapModule,
      providers: [
        {
          provide: FOR_ROOT_OPTIONS_TOKEN,
          useExisting: FOR_ROOT_OPTIONS_TOKEN
        },
        {
          provide: ModalRegistryOptions,
          useFactory: modalRegistryProvider(options),
          deps: [FOR_ROOT_OPTIONS_TOKEN],
          multi: true,
        }
      ]
    });
  }
}
