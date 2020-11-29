import { Injectable } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Injectable()
export class HeaderFactoryService {

  constructor(
    private auth: AuthService
  ) { }

  construirHeaderVehicle() {
    const headers = {
      'Authorization': `Bearer ${this.auth.getToken()}`,
      'Content-Type': 'application/json'
    }
    return { headers, withCredentials: true }
  }

}
