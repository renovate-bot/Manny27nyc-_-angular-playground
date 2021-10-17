import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getDefaultUser(): any[] {
    return [{ name: 'John Smith', age: 40 }];
  }
}
