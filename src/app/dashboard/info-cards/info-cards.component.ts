import { Component, Input } from '@angular/core';
import { Veiculo, Veiculos } from '../../../../models/veiculo.model';

@Component({
  selector: 'app-info-cards',
  imports: [],
  templateUrl: './info-cards.component.html',
  styleUrl: './info-cards.component.css'
})
export class InfoCardsComponent {
 @Input() titulo: string = '';
 @Input() valor: number = 0;

}
