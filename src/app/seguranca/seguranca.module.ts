import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderFactoryLoginService } from '../core/http/header-factory-login.service';
import { HttpParameterLoginBuilderService } from './http-parameter-login-builder.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    BrowserModule,
    SegurancaRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpParameterLoginBuilderService, HeaderFactoryLoginService]
})
export class SegurancaModule { }
