import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';
import { AuthGuard } from '../../security/auth.guard';
import { VehicleComponent } from './vehicle.component';

const routes: Routes = [
  {
    path: 'vehicle', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', component: VehicleComponent },
      { path: '', redirectTo: '/vehicle', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
