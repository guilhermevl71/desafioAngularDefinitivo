import { Component } from '@angular/core';
import { Veiculo, Veiculos } from '../../../../models/veiculo.model';

@Component({
  selector: 'app-info-cards',
  imports: [],
  templateUrl: './info-cards.component.html',
  styleUrl: './info-cards.component.css'
})
export class InfoCardsComponent {
  card: Veiculo = {
        id: 1,
        vehicle: 'Ranger',
        volumetotal: 1500,
        connected: 10,
        softwareUpdates: 15
      };

}
