import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";

import { VehicleService } from "./vehicle-form/vehicle.service";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { VehicleFormComponent } from "./vehicle-form/vehicle-form.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    CounterComponent,
    VehicleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: 'ORIGIN_URL', useValue: location.origin },
    { provide: 'ORIGIN_URL', useValue: "http://localhost:5000" },
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
