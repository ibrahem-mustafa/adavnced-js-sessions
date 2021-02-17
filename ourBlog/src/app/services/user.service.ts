import { Injectable } from '@angular/core';
import { USER_INTERFACE } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userInfo!: USER_INTERFACE;

  constructor() { }


  setUser(user: USER_INTERFACE) {
    if (!this.userInfo) {
      return this.userInfo = user;
    }

    const { name, email, phone, category } = user;
    return this.userInfo = {...this.userInfo, name, email, phone, category}
  }

  user(): USER_INTERFACE {
    return {...this.userInfo};
  }


}
