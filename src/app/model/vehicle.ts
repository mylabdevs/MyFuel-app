import { User } from './user';

export interface Vehicle {
  id: string;
  ano: number;
  capacidadeTanque: number;
  cor: string;
  km: number;
  marca: string;
  modelo: string;
  placa: string;
  usuario: User
}
