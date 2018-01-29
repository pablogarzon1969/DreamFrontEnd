import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomAvailableComponent } from './room-available/room-available.component';
import{BookRoomHotelComponent} from './book-room-hotel/book-room-hotel.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
 { path: '', component: LoginFormComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'country', component: CountryComponent },
 { path: 'city', component: CityComponent },
 { path: 'hotel', component: HotelComponent },
 { path: 'room-available', component: RoomAvailableComponent },
 { path: 'book-room-hotel', component: BookRoomHotelComponent },
 { path: '**', pathMatch: 'full', redirectTo: '' }
];

//export class AppRoutingModule {}
//export const appRouterModule:ModuleWithProviders  = RouterModule.forRoot(routes, {useHash :true});
@NgModule({
  imports: [
    RouterModule.forRoot(routes) // configuración para un módulo raiz
  ],
  exports: [
    RouterModule // se importará desde el módulo padre, el raíz
  ]
})
export class AppRoutingModule { }


