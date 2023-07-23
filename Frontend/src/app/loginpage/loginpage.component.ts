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
  domain = '';
  domain_link = '';
  name = '';
  
  toggleSignUpMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }


  constructor(private authService: AuthService) { }

  loginFormSubmit() {
    if(this.email == '' || this.password == ''){
      alert("Please fill all the fields")
      return;
    }

    
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
    if(this.name == '' || this.email == '' || this.domain == '' || this.domain_link == '' || this.password == ''){
      alert("Please fill all the fields")
      return;
    }

    if(!this.email.includes('@')){
      alert("Please enter a valid email address");
      return;
    }

    this.authService.signUpUser(this.name,this.email,this.domain,this.domain_link,this.password).subscribe(
      response => {
        console.log(response);
        alert("Sign Up Successful");
        this.toggleSignUpMode();
      }
    );


  }



}
