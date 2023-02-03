import { Injectable } from '@angular/core';
import { User } from '../components/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    { id: '1', name: 'John', email: 'John@example.com' },
    { id: '2', name: 'Adam', email: 'uja54@gmail.com' },
    { id: '3', name: 'Mike', email: 'Mike@example.com' },
    { id: '4', name: 'Jane', email: 'Jane@example.com' },
    { id: '5', name: 'Mike', email: 'Mike@example.com' },
    { id: '6', name: 'Jane', email: 'Jane@example.com' },
    { id: '7', name: 'Mike', email: 'Mike@example.com' },
  ];
  constructor() {}
}
