import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  features: any[];
  vehicle: any = {};

  constructor(
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes()
      .subscribe(makes => {
        this.makes = makes;
        console.log(`makes`, this.makes);
      });

    this.vehicleService.getFeatures()
      .subscribe(features => {
        this.features = features;
      });
  }

  onMakeChange() {
    console.log(`Vehicle: `, this.vehicle);
    let selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
