import { Component, Output, EventEmitter } from '@angular/core';
import { Veiculo } from '../../../../models/veiculo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-selector',
  imports: [FormsModule],
  templateUrl: './vehicle-selector.component.html',
  styleUrl: './vehicle-selector.component.css'
})
export class VehicleSelectorComponent {
  veiculoSelecionado: string = '';

  @Output() onChangeVeiculo = new EventEmitter<string>();

  onChange() {
    this.onChangeVeiculo.emit(this.veiculoSelecionado);
  }
}