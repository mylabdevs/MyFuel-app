import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../../seguranca/login-form/login';

@Injectable()
export class HeaderFactoryLoginService {

  clienteId: string = environment.clienteId;
  clienteSecret: string = environment.clienteSecret;

  constructor() { }

  construirHeaderLogin() {

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteId}:${this.clienteSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return { headers, withCredentials: true }
  }

  construirHttpParamsLogin(login: Login): string {
    return new HttpParams()
      .set('username', login.username)
      .set('password', login.password)
      .set('grant_type', 'password').toString();
  }
}
