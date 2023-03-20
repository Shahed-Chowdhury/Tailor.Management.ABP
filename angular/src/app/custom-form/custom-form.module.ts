import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { CustomFormComponent } from './custom-form.component';


@NgModule({
  declarations: [
    CustomFormComponent
  ],
  imports: [
    CommonModule,
    CustomFormRoutingModule
  ]
})
export class CustomFormModule { }
