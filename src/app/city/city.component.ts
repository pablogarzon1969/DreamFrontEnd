import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { CityService } from '../Services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService],
  encapsulation: ViewEncapsulation.None
})
export class CityComponent implements OnInit {
  cities;
  countries;
  country: number;
  loading = false;
  returnUrl: string;
  msj: String;
  newCity: any = {};

  constructor(
    private cityService: CityService) { }

  ngOnInit() {
    this.ShowInfoCountries();
  }
  Reload() {
    this.clear();
    this.ShowInfoCountries();
  }

  ShowInfoCountries() {

    this.loading = true
    this.cityService.getInfoAllCountries().subscribe(res => {
      this.loading = false
      this.countries = res
      console.log(this.countries);
    })
  }

  ShowtAllCitybyCountry(IdCountry: number) {

    console.log(this.country);
    this.loading = true
    this.cityService.getAllCitybyCountry(IdCountry).subscribe(res => {
      this.loading = false
      this.cities = res
      console.log(this.cities);
    })
  }

  CreateCity(newCity) {
    this.loading = true;
    newCity.name = this.newCity.name.toUpperCase();
    this.cityService.CreateCity(newCity)
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

  editCity(id: number, namecity: string, active: boolean) {
    this.newCity.id = id;
    this.newCity.name = namecity;
    this.newCity.active = active;
  }

  // Método que actualiza la ciudad
  updateCity(newCity) {
    this.cityService.updateCity(newCity).subscribe(res => console.log(res));
  // this.Reload();
  }

  clear() {
    this.newCity.name = '';
    this.newCity.active = false;
    this.newCity.IdPais = null;
    this.countries=null;
    this.cities=null;
    this.country=null;
  }
}

