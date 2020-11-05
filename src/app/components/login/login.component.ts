import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppService} from '../../app.service';
import {AuthenticationService} from '../../services/authentication-service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, private router: Router) {
  }

  login(): boolean {
    this.authenticationService.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/loans');
    });
    return false;
  }

  newApplication(): void {
    this.router.navigateByUrl('/newapplication');
  }

}
