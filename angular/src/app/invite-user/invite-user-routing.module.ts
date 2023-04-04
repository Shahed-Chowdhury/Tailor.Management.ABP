import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteUserComponent } from './invite-user.component';
import { InvitedUserListComponent } from './invited-user-list/invited-user-list.component';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';

const routes: Routes = [
  { path: '', component: InviteUserComponent },
  {path: 'list', component: InvitedUserListComponent, canActivate: [AuthGuard, PermissionGuard], data:{requiredPolicy: 'Admin'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteUserRoutingModule { }
