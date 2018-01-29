import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  name: string;
  password: string;
  loading = false;
  returnUrl: string;
  isLogged: boolean;
  error: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { this.isLogged = false; }

  ngOnInit() {
    this.authenticationService.logout();
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  loginUser() {
    this.loading = true;
    var username = this.name.toUpperCase();
    var password = this.password;
    this.authenticationService.login(username, password)
      .subscribe(
      data => {
        if (data == true) {
          // this.router.navigate([this.returnUrl]);
          this.router.navigate(['dashboard']);
          this.isLogged = true;
        } else {
          this.error = 'Usuario o Password incorrecto';
          this.loading = false;

        }
        // this.router.navigate(['application']);
      },
      error => {
        // this.alertService.error(error);
        this.error = error;
        this.loading = false;
      });
  }

  logout() {
    // remove user from local storage to log user out
    this.authenticationService.logout();
    this.loading = false;
  }

}
