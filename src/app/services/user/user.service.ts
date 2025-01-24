import { Injectable } from '@angular/core';
import {User} from '../../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    this.users = [
      new User('John','john@example.com','password'),
      new User('Johan','johan@example.com','password'),
      new User('Jane','Jane@example.com','password'),
    ]
  }

  getUsers():User[] {
    return this.users
  }

  findUserById(id:number):User | undefined {
    return this.users.find(user => user.id === id);
  }

  findUserByEmail(email:string):User | undefined {
    return this.users.find(user => user.email === email);
  }
}
