import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { 

  }

  loginUser(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/influencers/login', {email, password});
  }

  signUpUser(name:string, email: string,domain:string,domain_link:string, password:string): Observable<any> {
    if(name == '' || email == '' || domain == '' || domain_link == '' || password == ''){
      alert("Please fill all the fields")
    }
    return this.httpClient.post<any>('http://localhost:5000/influencers/register', {email, password,domain,domain_link,name});
  }


}
