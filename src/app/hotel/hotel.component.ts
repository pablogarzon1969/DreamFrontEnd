import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { HotelService } from '../Services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [HotelService],
})
export class HotelComponent implements OnInit {
  cities;
  countries;
  hotels;
  country: number;
  idCity: number;
  loading = false;
  returnUrl: string;
  msj: String;
  newCity: any = {};

  newHotel: any = {};
  newHotelCreate: any = {};
  newHotelUpdate: any = {};


  constructor(
    private hotelService: HotelService) { }

  ngOnInit() {
    debugger;
    this.ShowInfoCountries();
  }


  onChangeCityByCountry(deviceValue) {
    debugger;
    this.ShowtAllCitybyCountry(deviceValue);
  }

  onChangeCreateCityByCountry(deviceValue) {
    debugger;
    this.ShowCreateAllCitybyCountry(deviceValue);
  }

  Reload() {
    debugger;
    this.clear();
    this.ShowInfoCountries();
  }

  ShowInfoCountries() {
    debugger;
    this.loading = true
    this.hotelService.getInfoAllCountries().subscribe(res => {
      this.loading = false
      this.countries = res
      console.log(this.countries);
      console.log(this.hotels);
    })
  }

  ShowtAllCitybyCountry(IdCountry: number) {
    debugger;
    this.loading = true
    /* this.hotelService.getAllCitybyCountry(IdCountry).subscribe(res => {
       this.loading = false
       this.cities = res
       console.log(this.cities);
     })*/
    this.hotelService.getAllCitybyCountry(IdCountry).then(
      (cityData) => {
        if (cityData == null) {
          this.msj = "Nada";
        } else {
          this.cities = cityData
          console.log(this.cities);
        }
      }
    )
  }


  ShowCreateAllCitybyCountry(IdCountry: number) {
    debugger;
    this.loading = true
    /* this.hotelService.getAllCitybyCountry(IdCountry).subscribe(res => {
       this.loading = false
       this.cities = res
       console.log(this.cities);
     })*/
    this.hotelService.getAllCitybyCountry(IdCountry).then(
      (cityData) => {
        if (cityData == null) {
          this.msj = "Nada";
        } else {
          this.cities = cityData
          console.log(this.cities);
        }
      }
    )
  }

  ShowtAllHotelsbyCity(IdCity: number) {
    if (IdCity > 0) {
      debugger;
      this.loading = true
      this.hotelService.getAllHotelbyCity(IdCity).subscribe(res => {
        this.loading = false
        this.hotels = res
        console.log(this.hotels);
      })
    }
  }

  CreateHotel(newHotel) {
    debugger;
    this.loading = true;
    newHotel.name = newHotel.name.toUpperCase();
    this.hotelService.CreateHotel(newHotel)
      .subscribe(
      data => {
        this.msj = "Registro Creado con Exito";
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
        console.log(error);
      });
    this.clear();
    this.ShowInfoCountries();
  }

  editHotel(id: number, namecity: string, active: boolean) {
    debugger;
    this.newHotelUpdate.id = id;
    this.newHotelUpdate.name = namecity;
  }

  // Método que actualiza el hotel
  updateHotel(newHotelUpdate) {
    debugger;
    this.hotelService.updateHotel(newHotelUpdate).subscribe(res => console.log(res));
    // this.Reload();
  }

  clear() {
    this.newHotel = null;
    this.countries = null;
    this.cities = null;
    this.newHotelCreate.id = null;
    this.newHotelCreate.name = '';
    this.newHotelCreate.idCiudad = null;
    this.newHotelUpdate.id = null;
    this.newHotelUpdate.name = '';
    this.hotels=null;
  }


}

