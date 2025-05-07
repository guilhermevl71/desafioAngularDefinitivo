import { Component } from '@angular/core';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';

@Component({
  selector: 'app-dashboard',
  imports: [
      VehicleSelectorComponent,
      InfoCardsComponent
    ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
