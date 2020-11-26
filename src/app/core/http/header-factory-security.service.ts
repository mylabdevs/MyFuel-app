import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../../security/login-form/login';

@Injectable()
export class HeaderFactorySecurityService {

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

  construirHeaderRegisterUser() {
    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteId}:${this.clienteSecret}`),
      'Content-Type': 'application/json'
    }
    return { headers, withCredentials: true }
  }

  construirHttpParamsLogin(login: Login): string {
    return new HttpParams()
      .set('username', login.username)
      .set('password', login.password)
      .set('grant_type', 'password').toString();
  }

  construirHeaderLogout(token: string) {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
    return { headers, withCredentials: true }
  }

}
