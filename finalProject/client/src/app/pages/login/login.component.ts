import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = '';


  hasError = false;
  errorMsg = ''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email, this.password)
  }

}
