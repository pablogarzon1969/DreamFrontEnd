import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hotel } from '../_models/Hotel';
import { City } from '../_models/City';

import 'rxjs/add/operator/toPromise';
import { BookRoom } from '../_models/BookRoom';

@Injectable()
export class BookRoomHotelService {
messagess:any;
  constructor(private http: Http) { }


  getAllCountries() {
    return this.http.get("http://localhost:58097/api/Country").map(res => {
      return res.json();
    })
  }

  getTotalBookRoom(IdHotel: number):Promise<any> {
    var url = "http://localhost:58097/TotalBookRoom/Hotel/"+IdHotel;
    return this.http.get(url).map(res => {
      return res.json();
    }).toPromise().catch(this.handlePromiseError);
  }


  getValidatedBookRoom(IdHotel: number) {
    return this.http.get("http://localhost:58097/ValidatedBookRoom?idHotel="+IdHotel).map(res => {
      return res.json();
    })
  }

  getAllCitybyCountry(IdCountry: number):Promise<City> {
    var url = "http://localhost:58097/api/City?idCountry=" + IdCountry;
    return this.http.get(url).map(res => {
      return res.json();
    }).toPromise().catch(this.handlePromiseError);
  }

  getAllHotelbyCity(IdCity: number):Promise<Hotel> {
    var url = "http://localhost:58097/api/Hotel?idCity=" + IdCity;
    return this.http.get(url).map(res => {
      return res.json();
    }).toPromise().catch(this.handlePromiseError);
  }

  getAllBookRoomByHotel(IdHotel: number):Promise<BookRoom> {
    var url = "http://localhost:58097/BookRoom/Hotel/" + IdHotel;
    return this.http.get(url).map(res => {
      return res.json();
    }).toPromise().catch(this.handlePromiseError);
  }



  CreateBookRoomHotel(newbookRoom: BookRoom): Observable<any> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(newbookRoom);
    return this.http.post('http://localhost:58097/BookRoom', body, { headers: headers })
      .map((response: Response) => {
       return this.messagess= response.json();
      });
  }

  handlePromiseError(error:Response)
  {
    console.error(error);
    throw(error);
  }

}
