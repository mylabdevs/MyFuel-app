import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from './login-form/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUrl: string = environment.server + environment.obterTokenUrl;
  clienteId: string = environment.clienteId;
  clienteSecret: string = environment.clienteSecret;

  constructor(
    private http: HttpClient
  ) { }

  logar(login: Login): Observable<any> {
    const params = new HttpParams()
      .set('username', login.username)
      .set('password', login.password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteId}:${this.clienteSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenUrl, params.toString(), { headers, withCredentials: true });
  }
}
