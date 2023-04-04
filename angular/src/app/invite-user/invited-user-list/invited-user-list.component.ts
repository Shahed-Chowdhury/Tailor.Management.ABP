import { Component, OnInit } from '@angular/core';
import { InvitedUserAppServicesService } from '@proxy/invited-users';

@Component({
  selector: 'app-invited-user-list',
  templateUrl: './invited-user-list.component.html',
  styleUrls: ['./invited-user-list.component.scss']
})
export class InvitedUserListComponent implements OnInit {

  userList: any
  userListCols: any

  constructor(private inviteduserservice: InvitedUserAppServicesService) { }

  ngOnInit(): void {
    this.inviteduserservice.getInvitedUserList().subscribe(res => {
      this.userList = res
      this.userListCols = Object.keys(this.userList[1])
      console.log(this.userListCols);
    })
  }

}
