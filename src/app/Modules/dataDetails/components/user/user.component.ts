import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { User } from '../models/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  @Output() changeMetoGreen = new EventEmitter<string>();
  private intervalSubscription!: Subscription;
  userNewDetails: User[] = [];
  constructor(private _userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    // this.intervalSubscription = interval(1000).subscribe({
    //   next: (count) => {
    //     console.log(count);
    //   },
    // });
    this.userNewDetails = this._userService.users;
    console.log(this.userNewDetails);
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
  changeToGreen() {
    this.changeMetoGreen.emit();
  }
}
