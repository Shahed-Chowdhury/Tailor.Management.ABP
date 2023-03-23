import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFormComponent } from './view-form.component';

const routes: Routes = [{ path: '', component: ViewFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewFormRoutingModule { }
