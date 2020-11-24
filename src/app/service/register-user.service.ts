import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../model/register-user';
import { HttpParameterRegisterUserBuilderService } from '../security/http-parameter-register-user-builder.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(
    private http: HttpClient,
    private httpParameter: HttpParameterRegisterUserBuilderService
  ) { }

  registerUser(user: RegisterUser) {
    const { url, body, header } = this.httpParameter.construirHttpParametrosRegisterUser(user);
    return this.http.post(url, body, header);
  }
}
