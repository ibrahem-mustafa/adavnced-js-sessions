import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_INTERFACE, SIGN_UP_INTERFACE } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:5000/auth';

  constructor(private http: HttpClient) {}

  singup(userData: SIGN_UP_INTERFACE) {
    return this.http.post(this.authUrl + '/signup', userData);
  }

  login(userData: LOGIN_INTERFACE) {
    return this.http.post(this.authUrl + '/login', userData)
  };
}
