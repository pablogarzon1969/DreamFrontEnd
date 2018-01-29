import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RoomAvailableService } from '../Services/room-available.service';
import { User } from '../_models/user';
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'app-room-available',
  templateUrl: './room-available.component.html',
  styleUrls: ['./room-available.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [RoomAvailableService],

})
export class RoomAvailableComponent implements OnInit {
  currentUser: User;
  roomsAvailables;
  roomAvailables;
  hotels;
  hotelUser;
  cities;
  countries;
  loading = false;
  returnUrl: string;
  msj: String;
  newRoomAvailable: any = {};
  validateRoomAvailableHotel: Boolean;
  constructor(
    private roomAvailableService: RoomAvailableService) {
    debugger;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ShowHotelByUser(this.currentUser.id);

  }

  ngOnInit() {
    this.ShowInfoRoomsAvailables();
     this.ShowInfoCountries();

  }

  Reload() {
    this.ShowInfoRoomsAvailables();
  }

  ReloadClose() {
    this.ShowInfoRoomsAvailables();
    this.newRoomAvailable.totalHabitacionesDisponibles = "";
  }

  /*onLoadCountry() {
    this.ShowInfoCountries();
  }*/

  onChangeCityByCountry(deviceValue) {
    this.ShowtAllCitybyCountry(deviceValue);
  }

  onChangeHotelByCity(deviceValue) {
    this.ShowtAllHotelbyCity(deviceValue);
  }

  ShowInfoRoomsAvailables() {
    debugger;
    this.loading = true
    this.roomAvailableService.getInfoAllRoomsAvailables(this.currentUser.id).subscribe(res => {
      this.loading = false
      this.roomsAvailables = res
    })
  }


  CreateRoomAvailable() {

    this.loading = true;
    this.newRoomAvailable.idHotel = this.hotelUser[0].idHotel;
    this.roomAvailableService.getValidatedRoomAvailableHotelByDay(this.newRoomAvailable.idHotel).subscribe(
      res => {
          this.validateRoomAvailableHotel = res
      }
    );

    if (!this.validateRoomAvailableHotel) {
      this.roomAvailableService.CreateRoomAvailable(this.newRoomAvailable)
        .subscribe(
        data => {
          this.msj = "Registro Creado con Exito";
        },
        error => {
          // this.alertService.error(error);
          this.loading = false;
          console.log(error);
        });
      this.ShowInfoRoomsAvailables();
      this.clear();
    }
    else
    {
      this.msj="Ya se creo la informacion de las habitaciones disponibles del hotel para el dia de hoy";
    }
  }


  editRoomAvailable(id: number, totalHabitacionesDisponibles: number, fecha: Date) {
    debugger;
    this.newRoomAvailable.id = id;
    this.newRoomAvailable.totalHabitacionesDisponibles = totalHabitacionesDisponibles;
    var datePipe = new DatePipe("en-US");
    let fechaC = datePipe.transform(fecha, 'dd/MM/yyyy');
    this.newRoomAvailable.fecha = fechaC;
  }

  // Método que actualiza las habitaciones
  updateRoomAvailable(newRoomAvailable) {
    debugger;
    this.roomAvailableService.updateRoomAvailable(newRoomAvailable).subscribe(res => console.log(res));
    this.Reload();

  }

  clear() {
    this.newRoomAvailable.nombreAplicacion = '';
    this.newRoomAvailable.activo = false;
    this.msj="";
  }

  ShowInfoCountries() {
    debugger;
    this.loading = true
    this.roomAvailableService.getInfoAllCountries().subscribe(res => {
      this.loading = false
      this.countries = res
    })
  }

  showInfoHotel(IdHotel: number) {

  }

  ShowtAllCitybyCountry(IdCountry: number) {

    this.loading = true
    this.roomAvailableService.getAllCitybyCountry(IdCountry).then(
      (cityData) => {
        if (cityData == null) {
          this.msj = "Nada";
        } else {
          this.cities = cityData
        }
      }
    )
  }

  ShowtAllHotelbyCity(IdCity: number) {

    this.loading = true
    this.roomAvailableService.getAllHotelbyCity(IdCity).then(
      (hotelData) => {
        if (hotelData == null) {
          this.msj = "Nada";
        } else {
          this.hotels = hotelData
        }
      }
    )
  }

  ShowHotelByUser(IdUser: number) {
    debugger;
    this.loading = true
    this.roomAvailableService.getInfoHotelByUser(IdUser).then(
      (hotelData) => {
        if (hotelData == null) {
          this.msj = "Nada";
        } else {
          this.hotelUser = hotelData
          console.log(this.hotelUser);
        }
      }
    )
  }
}
