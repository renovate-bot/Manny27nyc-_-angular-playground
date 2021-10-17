import { TestBed } from '@angular/core/testing';
import { User } from './models/user';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default user', () => {
    let users: User[] = service.getDefaultUser();
    expect(users.length).toEqual(1);
    expect(users[0].name).toEqual('John Smith');
  });
});
