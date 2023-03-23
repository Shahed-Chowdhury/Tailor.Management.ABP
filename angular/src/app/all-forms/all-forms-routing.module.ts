import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFormsComponent } from './all-forms.component';

const routes: Routes = [{ path: '', component: AllFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFormsRoutingModule { }
