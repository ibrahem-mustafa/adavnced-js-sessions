import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_INTERFACE, SIGN_UP_INTERFACE } from '../interfaces/auth.interface';
import { USER_INTERFACE } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:5000/auth';

  constructor(private http: HttpClient, private userService: UserService) {}

  singup(userData: SIGN_UP_INTERFACE) {
    return this.http.post(this.authUrl + '/signup', userData);
  }

  login(userData: LOGIN_INTERFACE) {
    return this.http.post(this.authUrl + '/login', userData);
  }

  loggedIn(): boolean {
    return !!this.userService.user();
  }
}
