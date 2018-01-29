import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RoomAvailable } from '../_models/RoomAvailable';
import { Hotel } from '../_models/Hotel';
import { City } from '../_models/City';

@Injectable()
export class RoomAvailableService {

  constructor(private http: Http) { }
  CreateRoomAvailable(newroomAvailable:RoomAvailable) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(newroomAvailable);
      return this.http.post('http://localhost:58097/RoomAvailable', body,{headers:headers})
          .map((response: Response) => {
              let roomAvailable = response.json();
              console.log(roomAvailable);
          });

  }

  getValidatedRoomAvailableHotelByDay(IdHotel: number){
    return this.http.get("http://localhost:58097/ValidatedRoomAvailable/Hotel/"+IdHotel).map(res => {
      console.log(res.json());
    return res.json();
  })
  }

  getTotalRoomsAvailablesByHotel(idHotel:number):Promise<any> {
    var url = "http://localhost:58097/TotalRoomAvailable/Hotel/"+idHotel;
    return this.http.get(url).map(res => {
      return res.json();
    }).toPromise().catch(this.handlePromiseError);

  }

  getInfoAllRoomsAvailables(idUser:number) {
  /*  return this.http.get("http://localhost:58097/RoomAvailable").map(res => {
        console.log(res.json());
      return res.json();
    })*/

    return this.http.get("http://localhost:58097/RoomAvailable/Hotel/user/"+idUser).map(res => {
        console.log(res.json());
      return res.json();
    })
  }

  updateRoomAvailable(newroomAvailable:RoomAvailable) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.put("http://localhost:58097/RoomAvailable", JSON.stringify(newroomAvailable), { headers })
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

  getInfoHotelByUser(IdUser: number):Promise<any> {
    var url = "http://localhost:58097/api/Hotel/" + IdUser;
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
  }


}
