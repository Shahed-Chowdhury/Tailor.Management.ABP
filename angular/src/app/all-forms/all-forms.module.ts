import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFormsRoutingModule } from './all-forms-routing.module';
import { AllFormsComponent } from './all-forms.component';


@NgModule({
  declarations: [
    AllFormsComponent
  ],
  imports: [
    SharedModule,
    AllFormsRoutingModule
  ]
})
export class AllFormsModule { }
