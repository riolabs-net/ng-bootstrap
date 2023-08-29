import { NgModule } from "@angular/core";
import { COMPONENTS } from "./components";
import { CommonModule } from "@angular/common";
import { RlbBootstrapModule } from "@rlb/ng-bootstrap";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RlbBootstrapModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class RlbCBootstrapModule {

}
