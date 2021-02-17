import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  loading = false;
  hasError = false;
  errorMsg = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isDisabled(): boolean {
    return !this.email || !this.password || this.loading;
  }

  login() {
    this.loading = true;
    const user = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(user).subscribe(
      (result) => {
        this.loading = false;
        console.log(result)
      },
      (error) => {
        this.loading = false;
        console.log(error)
      }
    );
  }
}
