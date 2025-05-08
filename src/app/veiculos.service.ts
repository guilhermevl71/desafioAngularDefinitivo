import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculos, VeiculosAPI } from '../../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private readonly API = 'http://localhost:3001/vehicles'

  constructor(private http: HttpClient) { }
   
  getVehicles(): Observable<VeiculosAPI> {
    return this.http.get<VeiculosAPI>(this.API);
  }
}
