import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  branchesUrl = 'http://localhost:3000/swift/branches'
  constructor(private userService: UserService, private authService: AuthService, private http: HttpClient) { }


  branches() {
    console.log(this.userService.loggedIn())
    if (this.userService.user()) {
      return this.userService.user().branches! || []
    } else {
      return []
    }
  }

  fetchBranches() {
    return this.authService.me();
  }

  getHeaders() {
    return {
      authorization: window.localStorage.getItem('token')!
    }
  }
  createBranch(name: string, balance: number) {
    return this.http.post(this.branchesUrl, {name, balance}, {headers: this.getHeaders()})
  }
}
