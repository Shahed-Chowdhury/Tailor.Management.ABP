import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteUserRoutingModule } from './invite-user-routing.module';
import { InviteUserComponent } from './invite-user.component';


@NgModule({
  declarations: [
    InviteUserComponent
  ],
  imports: [
    CommonModule,
    InviteUserRoutingModule
  ]
})
export class InviteUserModule { }
