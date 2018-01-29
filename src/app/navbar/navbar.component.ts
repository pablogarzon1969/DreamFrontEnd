import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/index';
import { User } from '../_models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  Username;
  constructor(private authenticationService: AuthenticationService) {
debugger;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }

  ngOnInit() {
  }
  logout() {
    // remove user from local storage to log user out
    this.authenticationService.logout();
  }
}
