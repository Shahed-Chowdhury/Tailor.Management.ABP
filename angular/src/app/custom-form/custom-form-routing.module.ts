import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormComponent } from './custom-form.component';

const routes: Routes = [{ path: '', component: CustomFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFormRoutingModule { }
