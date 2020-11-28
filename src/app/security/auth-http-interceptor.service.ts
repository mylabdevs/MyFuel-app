import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

export class NotAuthenticatedError { }

@Injectable()
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.endsWith('/oauth/token') && !req.url.endsWith('/users') && this.auth.isAccessTokenInvalido()) {
      return from(this.auth.getNewAccessToken())
        .pipe(
          mergeMap(() => {
            if (this.auth.isAccessTokenInvalido()) {
              throw new NotAuthenticatedError();
            }

            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
              }
            });

            return next.handle(req);
          })
        );
    }

    return next.handle(req);
  }
}
