import { NgModule } from "@angular/core";
import { COMPONENTS } from "./components";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RlbBootstrapModule } from "@rlb/ng-bootstrap";

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RlbBootstrapModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class RlbCBootstrapModule {

}
