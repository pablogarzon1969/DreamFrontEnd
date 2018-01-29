import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RoomManagement } from '../_models/RoomManagement';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RoomManagementService {

  constructor(private http: Http) { }

  CreateHotel(newroomManagement: RoomManagement) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(newroomManagement);
    return this.http.post('http://localhost:58097/api/RoomAvailable', body, { headers: headers })
      .map((response: Response) => {
        let application = response.json();
        console.log(RoomManagement);
      });
  }


}
