import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'mn-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<Object>;

  constructor(
    private usersService: UserService
  ) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("my-notes_app"));

  }

}
