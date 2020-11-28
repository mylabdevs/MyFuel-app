import { Injectable } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Injectable()
export class HeaderFactoryService {

  token: string;

  constructor(
    auth: AuthService
  ) {
    this.token = auth.getToken();
  }

  construirHeaderCreateVehicle() {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    }
    return { headers, withCredentials: true }
  }

}
