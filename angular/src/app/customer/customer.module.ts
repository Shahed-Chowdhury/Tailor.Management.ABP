import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomerComponent,
    AllFormsComponent
  ],
  imports: [
    SharedModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
