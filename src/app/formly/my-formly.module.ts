import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

import { MaterialModule } from "../material.module";
import { MyFormlyArrayTypeComponent } from "./my-formly-array-type.component";
import { MyFormlyButtonTypeComponent } from "./my-formly-button-type.component";

@NgModule({
  declarations: [MyFormlyArrayTypeComponent, MyFormlyButtonTypeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: "required", message: "This field is required" }
      ],
      types: [
        { name: "array", component: MyFormlyArrayTypeComponent },
        // { name: 'table', component: MyFormlyTableTypeComponent},
        { name: "button", component: MyFormlyButtonTypeComponent }
      ]
    }),
    FormlyMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    MyFormlyArrayTypeComponent,
    MyFormlyButtonTypeComponent
  ]
})
export class MyFormlyModule {}
