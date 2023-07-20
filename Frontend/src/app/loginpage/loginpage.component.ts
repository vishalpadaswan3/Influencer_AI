import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})


export class LoginpageComponent {
  email = '';
  password = '';
  isSignUpMode: boolean = false;

  toggleSignUpMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }


  constructor(private authService: AuthService) { }

  loginFormSubmit() {
    this.authService.loginUser(this.email, this.password).subscribe(
      response => {
        console.log(response);

        localStorage.setItem('token', response.access_token);
        window.location.href = '/';

        alert("Login Successful");
      },
      error => {
        console.log(error);
        alert("Login Failed");
      }
    );
  }

  signUpFormSubmit() {
    alert("jf")
    console.log("hd");
  }



}
