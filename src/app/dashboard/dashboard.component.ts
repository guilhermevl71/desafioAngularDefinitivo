import { Component } from '@angular/core';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { NgFor } from '@angular/common';
import { Veiculo, Veiculos } from '../../../models/veiculo.model';
import { VeiculosService } from '../veiculos.service';
import { TabbleComponent } from './tabble/tabble.component';

@Component({
  selector: 'app-dashboard',
  imports: [
      VehicleSelectorComponent,
      InfoCardsComponent,
      TabbleComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  veiculoSelecionado?: Veiculo;

  veiculos: Array<Veiculo> = [];
  constructor(private veiculosservice: VeiculosService) { }

  vehicleNames: string[] = [];
  ngOnInit(): void {
    this.veiculosservice.getVehicles().subscribe((dados) => {
      console.log('Veículos recebidos:', dados);
      this.veiculos = dados.vehicles;
      this.vehicleNames = this.veiculos.map(v => v.vehicle);
    })
  }

  atualizarVeiculoSelecionado(veiculo: Veiculo) {
    this.veiculoSelecionado = veiculo; /* está função tem como objetivo alterar o valor de vehicle da lista veiculos, para o valor de select do componente filho vehicle-selector */
  }


}
