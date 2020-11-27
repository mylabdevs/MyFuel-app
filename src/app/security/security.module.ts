import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderFactorySecurityService } from '../core/http/header-factory-security.service';
import { AuthHttpInterceptorService } from './auth-http-interceptor.service';
import { HttpParameterLogoutBuilderService } from './http-paramete-logout-builder.service';
import { HttpParameterLoginBuilderService } from './http-parameter-login-builder.service';
import { HttpParameterRegisterUserBuilderService } from './http-parameter-register-user-builder.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoutService } from './logout.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [LoginFormComponent, RegisterUserComponent],
  imports: [
    BrowserModule,
    SecurityRoutingModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpParameterLoginBuilderService,
    HttpParameterRegisterUserBuilderService,
    HeaderFactorySecurityService,
    HttpParameterLogoutBuilderService,
    LogoutService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true
    }
  ]
})
export class SecurityModule { }
