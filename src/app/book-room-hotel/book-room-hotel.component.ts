import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookRoomHotelService } from '../Services/book-room-hotel.service';
import { RoomAvailableService } from '../Services/room-available.service';
import { User } from '../_models/user';
import { Hotel } from '../_models/Hotel';
import { City } from '../_models/City';
@Component({
  selector: 'app-book-room-hotel',
  templateUrl: './book-room-hotel.component.html',
  styleUrls: ['./book-room-hotel.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [BookRoomHotelService, RoomAvailableService],
})
export class BookRoomHotelComponent implements OnInit {
  currentUser: User;
  hotel: Hotel;
  city: City;
  cities;
  bookRoomsHotel;
  countries;
  hotels;
  idCity: number;
  loading = false;
  msj: String;
  newBookRoom: any = {};
  numeroHabitacionReservada: number;
  totalRoomAvailbales: number;
  totalBookRoom: number;

  constructor(
    private bookRoomHotelService: BookRoomHotelService, private roomAvailableService: RoomAvailableService) {

    debugger;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    debugger;
    this.ShowInfoCountries();
  }

  SearchBookRoomHotel(idHotel: number) {
    debugger;
    this.loading = true
    this.bookRoomHotelService.getAllBookRoomByHotel(idHotel).then(
      (BookRoomHotelData) => {
        if (BookRoomHotelData == null) {
          //this.msj = "Nada";
        } else {
          this.bookRoomsHotel = BookRoomHotelData
          console.log(this.bookRoomsHotel);
        }
      }
    )
  }




  ShowInfoCountries() {
    debugger;
    this.loading = true
    this.bookRoomHotelService.getAllCountries().subscribe(res => {
      this.loading = false
      this.countries = res
    })
  }

  onChangeCityByCountry(deviceValue) {
    debugger;
    this.ShowtAllCitybyCountry(deviceValue);
  }

  onChangeHotelByCity(deviceValue) {
    debugger;
    this.ShowtAllHotelbyCity(deviceValue);
  }



  ShowtAllCitybyCountry(IdCountry: number) {
    debugger;
    this.loading = true
    this.bookRoomHotelService.getAllCitybyCountry(IdCountry).then(
      (cityData) => {
        if (cityData == null) {
         // this.msj = "Nada";
        } else {
          this.cities = cityData
        }
      }
    )
  }

  ShowtAllHotelbyCity(IdCity: number) {
    debugger;
    this.loading = true
    this.bookRoomHotelService.getAllHotelbyCity(IdCity).then(
      (HotelData) => {
        if (HotelData == null) {
          //this.msj = "Nada";
        } else {
          this.hotels = HotelData
        }
      }
    )
  }


  CreateBookRoomHotel(newBookRoom) {
    debugger;
    this.loading = true;

    this.newBookRoom.idHotel = this.hotel;
    this.roomAvailableService.getTotalRoomsAvailablesByHotel(this.newBookRoom.idHotel).then(
      res => {
        this.totalRoomAvailbales = res
        console.log(this.totalRoomAvailbales);
      });
  /*  this.bookRoomHotelService.getTotalBookRoom(this.newBookRoom.idHotel).then(
      res => {
        this.totalBookRoom = res
        console.log(this.totalBookRoom);
      });*/
    if (this.newBookRoom.numeroHabitacionReservada < this.totalRoomAvailbales) {
     // if (this.totalBookRoom < this.totalRoomAvailbales) {
        this.newBookRoom.idCity = this.city;
        //newHotel.name = newHotel.name.toUpperCase();
        this.bookRoomHotelService.CreateBookRoomHotel(this.newBookRoom)
          .subscribe(
          data => {
         this.msj = "Registro creado con exito";
          },
          error => {
            // this.alertService.error(error);
            this.loading = false;
            console.log(error);
          });
        // this.ShowInfoRoomsAvailables();
        this.clear();
     /* }
      else {
        console.log(   this.msj = "El hotel no cuenta con habitaciones disponibles");

      }*/
    }
    else {
      this.msj = "El hotel no cuenta con habitaciones disponibles";
    }
  }

  clear() {
    this.newBookRoom.numeroHabitacionReservada = '';
    this.newBookRoom.numeroPasajeros = '';
    this.newBookRoom.mascota = false;
    this.city = null;
    this.hotel = null;

  }

  Reload() {
    debugger;
    // this.clear();
    this.ShowInfoCountries();
  }


}
