import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../../classes/User';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

interface AuthState{
  connectedUser: User|null
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private connectedUser:User|null = null;
  private state = new BehaviorSubject<AuthState>({connectedUser: null});
  private state$ = this.state.asObservable() // bonne pratique quand on crée un state

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

  login(email: string, password: string) {
    const user = this.userService.findUserByEmail(email);
    console.log(email,password);
    if (!user || user.password !== password) {
      throw new Error('Email or password is incorrect');
    }
    this.connectedUser = user;
    this.updateState(this.connectedUser);
    this.router.navigate(['/my-account']);
  }

  updateState(user:User) {
    this.state.next({connectedUser:user})
  }

  getState(){
    return this.state.asObservable();
  }

  logout() {
    this.connectedUser = null;
    this.updateState(null);
  }

  isAuthenticated() {
    return this.connectedUser !== null;
  }

  getConnectedUser() {
    return this.connectedUser;
  }

}
