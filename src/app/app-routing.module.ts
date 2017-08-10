import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { VehicleFormComponent } from "./vehicle-form/vehicle-form.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'vehicles/new', component: VehicleFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
