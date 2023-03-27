import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewFormRoutingModule } from './view-form-routing.module';
import { ViewFormComponent } from './view-form.component';


@NgModule({
  declarations: [
    ViewFormComponent
  ],
  imports: [
    SharedModule,
    ViewFormRoutingModule
  ]
})
export class ViewFormModule { }
