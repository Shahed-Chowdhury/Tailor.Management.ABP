import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AllFormsComponent } from './all-forms/all-forms.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  {path: 'view-all-forms', component:  AllFormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
