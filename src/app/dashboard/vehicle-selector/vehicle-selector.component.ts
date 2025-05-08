import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Veiculo, Veiculos } from '../../../../models/veiculo.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vehicle-selector',
  imports: [FormsModule, NgFor],
  templateUrl: './vehicle-selector.component.html',
  styleUrl: './vehicle-selector.component.css'
})
export class VehicleSelectorComponent {
  veiculoSelecionado?: Veiculo;

  @Input() veiculos: Veiculo[] = [];
  @Output() onChangeVeiculo = new EventEmitter<Veiculo>();

  onChange() { 
    if (this.veiculoSelecionado) {
    this.onChangeVeiculo.emit(this.veiculoSelecionado);
    }
  }
}