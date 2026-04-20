import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  username = signal<string>('Admin');
  password = signal<string>('dummy');
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  handleLogin() {
    // console.log(this.username + "-" + this.password());
    if (this.username() === 'Admin' && this.password() === 'dummy') {
      //this.router.navigate(['welcome', this.username]);     // redirect to table
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
