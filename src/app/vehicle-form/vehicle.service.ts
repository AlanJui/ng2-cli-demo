import {Injectable, Inject, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {environment} from '../../environments/environment';

@Injectable()
export class VehicleService implements OnInit {
  API_URL: string;

  // constructor(@Inject('ORIGIN_URL') private originUrl: string, private http: Http) { }
  constructor(private http: Http) {
    // this.API_URL = environment.API_URL;
    this.API_URL = environment['API_URL'];
    console.log('API_URL = ', this.API_URL);
  }

  ngOnInit() {
  }

  getMakes() {
    // return this.http.get(`${this.originUrl}/api/makes`)
    //   .map(res => res.json());
    return this.http.get(`${this.API_URL}/api/makes`)
      .map(res => res.json());
  }

  getFeatures() {
    // return this.http.get(`${this.originUrl}/api/features`)
    //   .map(res => res.json());
    return this.http.get(`${this.API_URL}/api/features`)
      .map(res => res.json());
  }
}
