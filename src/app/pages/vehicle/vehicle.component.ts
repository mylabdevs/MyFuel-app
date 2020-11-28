import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/security/auth.service';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from '../../model/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  user: User;
  vehicles: Vehicle[];

  constructor(
    auth: AuthService,
    private vehicleService: VehicleService,
    private toastr: ToastrService
  ) {
    this.user = auth.getUserAuthenticated();
  }

  ngOnInit(): void {
    this.listVehicles();
  }

  listVehicles() {
    this.vehicleService.getAllByUser(this.user)
      .subscribe((response) => {
        this.vehicles = response as unknown as Vehicle[];
      });
  }

  removeVehicle(id: number) {
    this.vehicleService.delete(id)
      .subscribe(() => {
        this.toastr
          .success('Veículo excluído com sucesso', 'Sucesso')
          .onHidden
          .subscribe(() => {
            this.listVehicles();
          })
      });
  }

  abastecer() {

  }

}
