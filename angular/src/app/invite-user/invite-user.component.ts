import { CreateUpdateInvitedUserDTO } from './../proxy/tailor-management-abp/invited-users/models';
import { InvitedUserAppServicesService } from './../proxy/invited-users/invited-user-app-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentityRoleDto, IdentityRoleService } from '@abp/ng.identity';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {

  constructor(private toaster: ToasterService, private fb: FormBuilder, private roles: IdentityRoleService, private invitedUserService: InvitedUserAppServicesService) { }

  inviteForm!: FormGroup
  roleList: any

  ngOnInit(): void {
    this.inviteFormBuilder();
    this.roles.getAllList().subscribe(res => {
      this.roleList = res
      this.roleList = this.roleList.items
    })
  }

  inviteFormBuilder(){
    this.inviteForm = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      role: ["", [Validators.required]]
    })
  }

  sendEmail(){
    var inviteUserDTO: CreateUpdateInvitedUserDTO = {userName: '', email: '', role: ''}
    inviteUserDTO.userName = this.inviteForm.value.username;
    inviteUserDTO.email = this.inviteForm.value.email;
    inviteUserDTO.role = this.inviteForm.value.role;

    this.invitedUserService.addInvitedUserByDto(inviteUserDTO).subscribe(res => {
      this.toaster.success("Invitation sent successfully", "Success")
    })
  }
}
