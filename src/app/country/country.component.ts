import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService],
  encapsulation: ViewEncapsulation.None
})
export class CountryComponent implements OnInit {

  countries;
  loading = false;
  returnUrl: string;
  msj: String;
  newCountry: any = {};


  constructor(
    private countryService: CountryService) { }

  ngOnInit() {
    this.ShowInfoCountries();
  }

  Reload() {
    this.ShowInfoCountries();
  }

  ShowInfoCountries() {
    this.loading = true
    this.countryService.getInfoAllCountries().subscribe(res => {
      this.loading = false
      this.countries = res
      console.log(this.countries);
    })
  }

  CreateCountry(newCountry) {
    this.loading = true;
    newCountry.name = this.newCountry.name.toUpperCase();
    this.countryService.CreateCountry(newCountry)
      .subscribe(
      data => {
        this.msj = "Registro Creado con Exito";
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
        console.log(error);
      });
    this.ShowInfoCountries();
    this.clear();
  }

  editCountry(id: number, namecountry: string, active: boolean) {
    this.newCountry.id = id;
    this.newCountry.name = namecountry;
    this.newCountry.active = active;
  }

  // Método que actualiza el pais
  updateCountry(newCountry) {
    this.countryService.updateCountry(newCountry).subscribe(res => console.log(res));
    // this.Reload();
  }

  clear() {
    this.newCountry.name = '';
    this.newCountry.active = false;
  }
}

