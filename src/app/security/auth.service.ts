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

  storeToken(token: any) {
    const access_token = JSON.stringify(token);
    localStorage.setItem('access-token', access_token);
  }

  getToken() {
    const token = JSON.parse(localStorage.getItem('access-token'));

    this.jwtPayload = token ? this.jwtHelper.decodeToken(token.access_token) : null;

    return token ? token.access_token : null;
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

  getUserAuthenticated(): string {
    const token = JSON.parse(localStorage.getItem('access-token'));

    if (token) {
      const usuario = token.nome;
      return usuario;
    }
    return null;
  }

  getNewAccessToken() {
    const { url, body, header } = this.httpParameter.construirHttpParametrosNewAccessToken();

    return this.http.post(url, body, header)
      .toPromise()
      .then(response => {
        this.storeToken(response);
        console.log('Novo access token criado!');

        return Promise.resolve(null);
      }).catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });;

  }

  isAccessTokenInvalido() {
    const token = JSON.parse(localStorage.getItem('access-token'));

    return !token || this.jwtHelper.isTokenExpired(token.access_token);
  }

}
