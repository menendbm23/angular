import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usrsvc: UserService
  ) { }

  ngOnInit(): void {
    this.usrsvc.list().subscribe(
      users => {
        console.log("Users:", users)
        this.users = users;
      },
      err => { console.error(err); }
    );
  }

}
