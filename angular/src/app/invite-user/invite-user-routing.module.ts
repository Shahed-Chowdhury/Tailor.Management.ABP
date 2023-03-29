import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteUserComponent } from './invite-user.component';

const routes: Routes = [{ path: '', component: InviteUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteUserRoutingModule { }
