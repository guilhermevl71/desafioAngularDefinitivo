import { Component } from '@angular/core';
import { Dados } from '../../../../models/dados.model';
import { VeiculosService } from '../../veiculos.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tabble',
  imports: [FormsModule, NgIf],
  templateUrl: './tabble.component.html',
  styleUrl: './tabble.component.css'
})
export class TabbleComponent {
  vin = '';
  dadosVeiculo?: Dados;
  erro: string = '';

  constructor(private veiculosService: VeiculosService) { }

  buscarDadosPorVin() {
    this.veiculosService.getDadosPorVin(this.vin).subscribe({
      next: (dados: Dados) => {
        this.dadosVeiculo = dados;
        console.log(dados);
        this.erro = '';
      },
      error: (err: any) => {
        this.dadosVeiculo = undefined;
        this.erro = err.error.message || 'Erro ao buscar dados';
      }
    });
  }
  
}
