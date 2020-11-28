import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
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

  getAllByUser(user: User) {
    const { url, header } = this.httpParameter.createParameterFindByUserVehicle(user.id);
    return this.http.get<any[]>(url, header);
  }

  delete(id: number) {
    const { url, header } = this.httpParameter.createParameteDeleteVehicle(id);
    return this.http.delete(url, header);
  }
}
