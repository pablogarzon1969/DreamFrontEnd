import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Country } from '../_models/Country';

@Injectable()
export class CountryService {

  constructor(private http: Http) { }

  CreateCountry(newcountry:Country) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(newcountry);
      return this.http.post('http://localhost:58097/api/Country', body,{headers:headers})
          .map((response: Response) => {
              let application = response.json();
              console.log(Country);
          });

  }

  getInfoAllCountries() {
    return this.http.get("http://localhost:58097/api/Country").map(res => {
      return res.json();
    })
  }

  updateCountry(newcountry:Country) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put("http://localhost:58097/api/Country", JSON.stringify(newcountry), { headers })
      .map(res => {
        return res;
      }, error => {
        console.log('error', error)
      })
  }

}
