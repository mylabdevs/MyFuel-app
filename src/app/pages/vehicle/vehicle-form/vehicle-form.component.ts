import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';
import { AuthService } from '../../../security/auth.service';
import { ErrorHandlerService } from '../../../service/error-handler.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean;
  vehicle: Vehicle;
  @Output() updateVehicleList = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private vehicleService: VehicleService,
    private auth: AuthService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.iniciarForm();
  }

  iniciarForm() {
    this.form = this.formBuilder.group({
      ano: ['', Validators.required],
      capacidadeTanque: ['', Validators.required],
      cor: ['#000000', Validators.required],
      km: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required]
    })

  }

  submit() {
    this.isLoading = true;
    this.vehicle = this.form.getRawValue();
    this.vehicle.usuario = this.auth.getUserAuthenticated();

    console.log(this.vehicle);

    this.vehicleService
      .save(this.vehicle)
      .subscribe(response => {

        this.toastr
          .success('Veículo cadastrado com sucesso', 'Sucesso')
          .onHidden
          .subscribe(() => {
            console.log("JAIRO 2");
            this.updateVehicleList.emit("");
            this.isLoading = false;
            this.resetForm(this.form);

          })
      }, err => {
        this.isLoading = false;
        this.errorHandler.showErrors(err);
        this.form.reset();
      });

  }

  resetForm(form: FormGroup) {

    form.reset();

    Object.keys(form.controls).forEach(key => {
      form.get(key).setErrors(null);
    });
  }
}
