import { Injectable } from '@angular/core';
import { HeaderFactoryService } from 'src/app/core/http/header-factory.service';
import { RotaApi } from 'src/app/core/http/rota-api';
import { environment } from '../../../environments/environment';
import HttpParametros from '../../core/http/http-prametros';
import { Vehicle } from '../../model/vehicle';

@Injectable()
export class HttpParameterVehicheBuilderService {

  private readonly URL: string;
  private readonly ROTA: string;

  constructor(
    private headers: HeaderFactoryService
  ) {
    this.URL = environment.server;
    this.ROTA = RotaApi.VEHICLE;
  }

  createParameterSaveVehicle(vehiche: Vehicle) {

    const header = this.headers.construirHeaderCreateVehicle();

    const body = JSON.stringify(vehiche);

    const httpParametros: HttpParametros = HttpParametros.builder()
      .comEndereco(this.URL)
      .comPathParameter(this.ROTA)
      .comBody(body)
      .comHeader(header)
      .build();

    return httpParametros;
  }
}
