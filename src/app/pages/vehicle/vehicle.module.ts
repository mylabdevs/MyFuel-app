import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderFactoryService } from '../../core/http/header-factory.service';
import { HttpParameterVehicheBuilderService } from '../../service/http-parameter/http-parameter-vehiche-builder.service';
import { CorStyleModule } from '../../shared/directive/style/cor-style.module';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  declarations: [
    VehicleFormComponent,
    VehicleListComponent,
    VehicleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    VehicleRoutingModule,
    MatTabsModule,
    MatCardModule,
    CorStyleModule
  ],
  providers: [
    HttpParameterVehicheBuilderService,
    HeaderFactoryService
  ]
})
export class VehicleModule { }
