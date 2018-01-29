import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { City } from '../_models/City';

@Injectable()
export class CityService {

  constructor(private http: Http) { }

  CreateCity(newcity: City) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(newcity);
    return this.http.post('http://localhost:58097/api/City', body, { headers: headers })
      .map((response: Response) => {
        let application = response.json();
        console.log(City);
      });
  }

  updateCity(newcity:City) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put("http://localhost:58097/api/City", JSON.stringify(newcity), { headers })
      .map(res => {
        return res;
      }, error => {
        console.log('error', error)
      })
  }

  getInfoAllCountries() {
    return this.http.get("http://localhost:58097/api/Country").map(res => {
      return res.json();
    })
  }

  getAllCitybyCountry(IdCountry: number) {
    var url = "http://localhost:58097/api/City?idCountry=" + IdCountry;
    return this.http.get(url).map(res => {
      return res.json();
    })
  }
}
