import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormResponsesRoutingModule } from './form-responses-routing.module';
import { FormResponsesComponent } from './form-responses.component';


@NgModule({
  declarations: [
    FormResponsesComponent
  ],
  imports: [
    CommonModule,
    FormResponsesRoutingModule
  ]
})
export class FormResponsesModule { }
