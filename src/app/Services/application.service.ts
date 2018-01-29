import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Application } from '../_models/Application';

@Injectable()
export class ApplicationService {

  constructor(private http: Http) { }
  CreateApplication(newapplication:Application) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(newapplication);
      return this.http.post('http://localhost:58097/Dream/api/Application', body,{headers:headers})
          .map((response: Response) => {
              let application = response.json();
              console.log(Application);
          });

  }

  getInfoAllApplications() {
      return this.http.get("http://localhost:58097/Dream/api/Application").map(res => {
          //console.log(res.json());
        return res.json();
      })
    }

    updateApplication(newapplication:Application) {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });

      return this.http.put("http://localhost:58097/Dream/api/Application", JSON.stringify(newapplication), { headers })
        .map(res => {
          return res;
        }, error => {
          console.log('error', error)
        })
    }
}
