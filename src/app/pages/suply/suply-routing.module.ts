import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';
import { AuthGuard } from '../../security/auth.guard';
import { SuplyFormComponent } from './suply-form/suply-form.component';
import { SuplyListComponent } from './suply-list/suply-list.component';

const routes: Routes = [
  {
    path: 'suply', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'form/:id', component: SuplyFormComponent },
      { path: 'list', component: SuplyListComponent },
      { path: '', redirectTo: '/suply/list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplyRoutingModule { }
