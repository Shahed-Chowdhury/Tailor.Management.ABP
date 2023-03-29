import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormResponsesComponent } from './form-responses.component';

const routes: Routes = [{ path: '', component: FormResponsesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormResponsesRoutingModule { }
