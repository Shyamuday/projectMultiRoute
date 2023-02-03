import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../models/users.model';

@Component({
  selector: 'app-user-name-detail',
  templateUrl: './user-name-detail.component.html',
  styleUrls: ['./user-name-detail.component.css'],
})
export class UserNameDetailComponent implements OnInit {
  userNameOnly: User[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userNameOnly = this.userService.users;
    console.log(this.userNameOnly);
  }
}
