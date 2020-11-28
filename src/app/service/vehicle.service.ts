import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { HttpParameterVehicheBuilderService } from './http-parameter/http-parameter-vehiche-builder.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpClient,
    private httpParameter: HttpParameterVehicheBuilderService
  ) { }

  save(vehicle: Vehicle) {
    const { url, body, header } = this.httpParameter.createParameterSaveVehicle(vehicle);

    console.log(url);


    return this.http.post(url, body, header);
  }
}
