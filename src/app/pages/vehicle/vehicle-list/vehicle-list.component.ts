import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { User } from '../../../model/user';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  @Input() vehicles: Vehicle[];
  @Output() removeVehicle = new EventEmitter();
  user: User;

  colunas = ['id', 'modelo', 'marca', 'km', 'tanque', 'ano', 'placa', 'usuario', 'cor', 'acao'];

  constructor() { }

  ngOnInit(): void { }

  excluir(id: number) {
    this.removeVehicle.emit(id)
  }

  abastecer() { }

}
