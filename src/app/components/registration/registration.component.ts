import { Component, OnInit } from '@angular/core';

export interface Operator {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
