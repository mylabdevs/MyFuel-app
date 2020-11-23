import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HeaderFactoryLoginService } from '../core/http/header-factory-login.service';
import HttpParametros from '../core/http/http-prametros';
import { RotaApi } from '../core/http/rota-api';
import { Login } from './login-form/login';

@Injectable()
export class HttpParameterLoginBuilderService {

  private readonly URL: string;
  private readonly ROTA: string;

  constructor(
    private headers: HeaderFactoryLoginService
  ) {
    this.URL = environment.server;
    this.ROTA = RotaApi.TOKEN;
  }

  construirHttpParametrosLogin(login: Login) {
    const header = this.headers.construirHeaderLogin();

    const params = this.headers.construirHttpParamsLogin(login);

    const httpParametros: HttpParametros = HttpParametros.builder()
      .comEndereco(this.URL)
      .comPathParameter(this.ROTA)
      .comBody(params)
      .comHeader(header)
      .build();

    return httpParametros;
  }
}
