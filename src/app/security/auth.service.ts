import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParameterLoginBuilderService } from './http-parameter-login-builder.service';
import { Login } from './login-form/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private httpParameter: HttpParameterLoginBuilderService
  ) { }

  logar(login: Login): Observable<any> {
    const { url, body, header } = this.httpParameter.construirHttpParametrosLogin(login);

    return this.http.post(url, body, header);
  }
}
