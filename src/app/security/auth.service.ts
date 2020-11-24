import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpParameterLoginBuilderService } from './http-parameter-login-builder.service';
import { Login } from './login-form/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtPayload: any;

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private httpParameter: HttpParameterLoginBuilderService
  ) { }

  logar(login: Login): Observable<any> {
    const { url, body, header } = this.httpParameter.construirHttpParametrosLogin(login);

    return this.http.post(url, body, header);
  }

  storeToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('access-token', token);
  }

  getToken() {
    const token = localStorage.getItem('access-token');

    return token ? token : null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  cleanAccessToken() {
    localStorage.removeItem('access-token');
    this.jwtPayload = null;
  }
}
