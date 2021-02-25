import { Injectable } from '@angular/core';
import { USER_INTERFACE } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData!: USER_INTERFACE | undefined;
  constructor() { }

  setUser(user: USER_INTERFACE) {
    const { name, id, email, transactions, branches } = user;

    if (this.loggedIn()) {
      this.userData = {...this.userData!, name, email, branches, transactions}
    } else {
      this.userData = user;
    }

    window.localStorage.setItem('user', JSON.stringify({ name, id, email }));

  }

  setToken(token: string) {
    window.localStorage.setItem('token', `Bearer ${token}`)
  }

  loggedIn() {
    return !!window.localStorage.getItem('user')
  }

  clear() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.userData = undefined;
  }

  user() {
    return {... this.userData}
  }
}
