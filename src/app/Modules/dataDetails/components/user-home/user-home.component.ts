import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/users.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  paramsSubscriptionDestroy!: Subscription;
  user!: { id: string; name: string; email: string };

  users: User[] = [
    { id: '1', name: 'John', email: 'John@example.com' },
    { id: '2', name: 'Adam', email: 'uja54@gmail.com' },
    { id: '3', name: 'Mike', email: 'Mike@example.com' },
    { id: '4', name: 'Jane', email: 'Jane@example.com' },
    { id: '5', name: 'Mike', email: 'Mike@example.com' },
    { id: '6', name: 'Jane', email: 'Jane@example.com' },
    { id: '7', name: 'Mike', email: 'Mike@example.com' },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
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
}
