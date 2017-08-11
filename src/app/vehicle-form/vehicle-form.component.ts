import { MakeService } from './make.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any[];
  models: any[];
  vehicle: any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit() {
    this.makeService.getMakes()
      .subscribe(makes => {
        this.makes = makes;
        console.log(`makes`, this.makes);
      });
    // this.makes = this.makeService.getMakes();
  }

  onMakeChange() {
    console.log(`Vehicle: `, this.vehicle);
    let selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
