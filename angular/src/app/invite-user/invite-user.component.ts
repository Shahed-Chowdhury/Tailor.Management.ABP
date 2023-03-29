import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-user',
  templateUrl: './invite-user.component.html',
  styleUrls: ['./invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  inviteForm!: FormGroup

  ngOnInit(): void {
    this.inviteFormBuilder();
  }

  inviteFormBuilder(){
    this.inviteForm = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    })
  }

  sendEmail(){
    console.log(this.inviteForm);
  }

}
