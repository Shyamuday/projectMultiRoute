import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { User } from '../models/users.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  paramsSubscriptionDestroy!: Subscription;
  user!: { id: string; name: string; email: string };
  userSpecifications = [
    { id: 1, name: 'Overview' },
    { id: 2, name: 'Description' },
    { id: 3, name: 'History' },
  ];
  usersName: User[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _userService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersName = this._userService.users;

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      email: this.route.snapshot.params['email'],
    };
    this.paramsSubscriptionDestroy = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        this.user.email = params['email'];
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscriptionDestroy.unsubscribe();
  }
  onUserById(id: string): void {
    this.router.navigate(
      ['/dataDetails/users/:id']
      // , {queryParams: { allowName: 'name', fragment: 'loading' }  }
    );
  }
  onUserId(): void {
    this.router.navigate(['/dataDetails/users/:id/:name/']);
  }
  onUserEmail(id: string): void {
    this.router.navigate(['/dataDetails/users/:id/:email/']);
  }

  routeMetoUserID() {
    this.router.navigate(['/dataDetails/users']);
  }
  onUserBtn(id: number) {
    this.router.navigate(['/dataDetails/users', id]);
  }
}
