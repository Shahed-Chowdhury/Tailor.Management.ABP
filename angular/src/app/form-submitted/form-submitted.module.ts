import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSubmittedRoutingModule } from './form-submitted-routing.module';
import { FormSubmittedComponent } from './form-submitted.component';


@NgModule({
  declarations: [
    FormSubmittedComponent
  ],
  imports: [
    CommonModule,
    FormSubmittedRoutingModule
  ]
})
export class FormSubmittedModule { }
