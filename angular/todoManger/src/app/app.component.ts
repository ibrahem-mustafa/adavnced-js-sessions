import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {


  todos = []

  // greetMsg = '';
  // title = 'Hello From Angular';
  // eleId = 'AppRoot';

  // username = '';
  // email = '';
  // password = '';

  // greet() {
  //   const result = 2 * 2;
  //   return this.title + ' Again' + 'Result is ' + result;
  // }

  // sayHi() {
  //   alert('Hello');
  // }

  // inc(e: MouseEvent): number {
  //   if (this.clicks == 9) {
  //     return (this.clicks = 0);
  //   }
  //   this.clicks++;
  //   return this.clicks;
  // }

  // combine() {
  //   this.sayHi();
  // }

  // h3Classes() {
  //   return {
  //     warn: this.clicks < 3,
  //     info: this.clicks >= 3 && this.clicks < 6,
  //     error: this.clicks >= 6 && this.clicks < 10,
  //   };
  // }

  // h3Styles() {
  //   return {
  //     color: this.clicks < 3 ? 'red' : 'white',
  //     'font-size': this.clicks < 3 ? '21px' : '34px',
  //   };
  // }

  // sayInputValue(input: any) {
  //   // console.log(input)
  //   // console.log(input.value)
  //   console.log(this.username);
  // }

  // updateUsername(e: Event) {
  //   const value = (e.target as HTMLInputElement).value;
  //   this.username = value;
  // }

  // signup() {
  //   console.log({
  //     name: this.username,
  //     email: this.email,
  //     password: this.password,
  //   });
  // }
  inc(e: MouseEvent): number {
    if (this.clicks == 9) {
      return (this.clicks = 0);
    }
    this.clicks++;
    return this.clicks;
  }
  clicks = 0;
  isDisabled = true;
  colors = ['red', 'blue', 'green', 'yellow'];

  showH2 = false;

  show(): boolean {
    return this.showH2;
  }

  message = '';

  rMessage(message: string) {

    this.message = message;

  }




  date = new Date()
}
