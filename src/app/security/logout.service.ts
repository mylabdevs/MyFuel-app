import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpParameterLogoutBuilderService } from './http-paramete-logout-builder.service';

@Injectable()
export class LogoutService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private httpParameterLogout: HttpParameterLogoutBuilderService
  ) { }

  logout() {
    const token = this.auth.getToken();
    const { url, header } = this.httpParameterLogout.construirHttpParametrosLogout(token);

    return this.http.delete(url, header)
      .toPromise()
      .then(() => {
        this.auth.cleanAccessToken();
      });
  }
}
