import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { CustomFormComponent } from './custom-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomFormComponent
  ],
  imports: [
    SharedModule,
    CustomFormRoutingModule
  ]
})
export class CustomFormModule { }
