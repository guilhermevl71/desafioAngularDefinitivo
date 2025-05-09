import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculos, VeiculosAPI } from '../../models/veiculo.model';
import { Dados } from '../../models/dados.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private readonly API = 'http://localhost:3001/vehicles'
  private readonly API2 = 'http://localhost:3001/vehicleData'

  constructor(private http: HttpClient) { }
   
  getVehicles(): Observable<VeiculosAPI> {
    return this.http.get<VeiculosAPI>(this.API);
  }

  getDadosPorVin(vin: string): Observable<Dados> {
    return this.http.post<Dados>(this.API2, { vin });
  }
}
