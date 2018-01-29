import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthenticationService } from './services/index';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomAvailableComponent } from './room-available/room-available.component';
import { BookRoomHotelComponent } from './book-room-hotel/book-room-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    CountryComponent,
    CityComponent,
    HotelComponent,
    RoomAvailableComponent,
    BookRoomHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
