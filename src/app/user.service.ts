import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getDefaultUser(): User[] {
    return [{ name: 'John Smith', age: 40 }];
  }
}
