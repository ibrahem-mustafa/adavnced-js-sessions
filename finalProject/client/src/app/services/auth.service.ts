import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:3000/auth';
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  getHeaders() {
    return {
      authorization: window.localStorage.getItem('token')!,
    }
  }

  fetchUser() {
    return this.http
      .get(`${this.authUrl}/me`, {
        headers: this.getHeaders(),
      })
      .subscribe(
        (result: any) => {
          this.userService.setUser(result.user);
          this.userService.setToken(result.token);
        },
        (error) => console.log(error)
      );
  }

  me() {
    return this.http.get(`${this.authUrl}/me`, {
      headers: this.getHeaders(),
    });
  }

  login(email: string, password: string) {
    this.http
      .post(`${this.authUrl}/signin`, {
        email,
        password,
      })
      .subscribe(
        (result: any) => {
          this.userService.setUser(result.user);
          this.userService.setToken(result.token);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
