import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: any;
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userDetails = this.userService.users;
  }
}
