import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDetails} from '../../app.service';


const apiUrl = 'http://localhost:18080/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {
    const authHeader = btoa(credentials.username + ':' + credentials.password);
    sessionStorage.setItem('authHeader', authHeader);
    const header = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + authHeader
    } : {});

    console.log(header);
    this.http.get<UserDetails>(apiUrl + 'user', {headers: header}).subscribe(response => {
      console.log(document.cookie);
      console.log(response);
      this.authenticated = !!response.name;
      return callback && callback();
    });

  }

  logout(): void {
    this.authenticated = false;
    sessionStorage.setItem('authHeader', null);
  }
}
