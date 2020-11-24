import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HeaderFactorySecurityService } from '../core/http/header-factory-security.service';
import HttpParametros from '../core/http/http-prametros';
import { RotaApi } from '../core/http/rota-api';
import { RegisterUser } from '../model/register-user';

@Injectable()
export class HttpParameterRegisterUserBuilderService {

  private readonly URL: string;
  private readonly ROTA: string;

  constructor(
    private headers: HeaderFactorySecurityService
  ) {
    this.URL = environment.server;
    this.ROTA = RotaApi.USERS;
  }

  construirHttpParametrosRegisterUser(user: RegisterUser): { url: any; body: any; header: any; } {
    const header = this.headers.construirHeaderRegisterUser();

    const body = JSON.stringify(user);

    const httpParametros: HttpParametros = HttpParametros.builder()
      .comEndereco(this.URL)
      .comPathParameter(this.ROTA)
      .comBody(body)
      .comHeader(header)
      .build();

    return httpParametros;

  }
}
