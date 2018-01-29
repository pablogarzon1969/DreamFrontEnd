import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }

    login(username: string, password: string) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:58097/api/Authorization/authenticate', JSON.stringify({ username: username, password: password }),{headers:headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                //if (user && user.token) {
                  if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }
                else
                {
                  return false;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
