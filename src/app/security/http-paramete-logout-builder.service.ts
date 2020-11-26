import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HeaderFactorySecurityService } from '../core/http/header-factory-security.service';
import HttpParametros from '../core/http/http-prametros';
import { RotaApi } from '../core/http/rota-api';

@Injectable()
export class HttpParameterLogoutBuilderService {
  private readonly URL: string;
  private readonly ROTA: string;

  constructor(
    private headers: HeaderFactorySecurityService
  ) {
    this.URL = environment.server;
    this.ROTA = RotaApi.LOGOUT;
  }

  construirHttpParametrosLogout(token: string) {
    const header = this.headers.construirHeaderLogout(token);

    const httpParametros: HttpParametros = HttpParametros.builder()
      .comEndereco(this.URL)
      .comPathParameter(this.ROTA)
      .comHeader(header)
      .build();

    return httpParametros;
  }

}
