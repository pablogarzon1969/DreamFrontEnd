import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hotel } from '../_models/Hotel';
import { City } from '../_models/City';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HotelService {

  constructor(private http: Http) { }

    CreateHotel(newhotel: Hotel) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let body = JSON.stringify(newhotel);
      return this.http.post('http://localhost:58097/api/Hotel', body, { headers: headers })
        .map((response: Response) => {
          let application = response.json();
          console.log(Hotel);
        });
    }

    updateHotel(newhotel:Hotel) {
      let headers = new Headers({
        'Content-Type': 'application/json'
      });

      return this.http.put("http://localhost:58097/api/Hotel", JSON.stringify(newhotel), { headers })
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

    getAllHotelbyCity(IdCity: number) {
      var url = "http://localhost:58097/api/Hotel?idCity=" + IdCity;
      return this.http.get(url).map(res => {
        return res.json();
      })
    }

    getAllCitybyCountry(IdCountry: number):Promise<City> {
      var url = "http://localhost:58097/api/City?idCountry=" + IdCountry;
      return this.http.get(url).map(res => {
        return res.json();
      }).toPromise().catch(this.handlePromiseError);
    }

    handlePromiseError(error:Response)
    {
      console.error(error);
      throw(error);
     // return Observable.throw(error);
    }

}
