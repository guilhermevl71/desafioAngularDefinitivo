import { Component } from '@angular/core';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { NgFor } from '@angular/common';
import { Veiculo, Veiculos } from '../../../models/veiculo.model';

@Component({
  selector: 'app-dashboard',
  imports: [
      VehicleSelectorComponent,
      InfoCardsComponent,
      NgFor
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  listacard: Veiculos = [
    {
      id: 1,
      vehicle: 'Ranger',
      volumetotal: 100,
      connected: 10,
      softwareUpdates: 15
    }
  ];

  veiculoSelecionado?: Veiculo;

atualizarVeiculoSelecionado(nome: string) {
  this.veiculoSelecionado = this.listacard.find(v => v.vehicle === nome);
}


}
