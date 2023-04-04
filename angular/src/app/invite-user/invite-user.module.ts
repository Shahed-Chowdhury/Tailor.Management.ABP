import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteUserRoutingModule } from './invite-user-routing.module';
import { InviteUserComponent } from './invite-user.component';
import { InvitedUserListComponent } from './invited-user-list/invited-user-list.component';



@NgModule({
  declarations: [
    InviteUserComponent,
    InvitedUserListComponent
  ],
  imports: [
    SharedModule,
    InviteUserRoutingModule
  ]
})
export class InviteUserModule { }
