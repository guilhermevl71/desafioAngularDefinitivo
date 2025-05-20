import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-politica-de-privacidade',
  imports: [RouterLink, CabecalhoComponent],
  templateUrl: './politica-de-privacidade.component.html',
  styleUrl: './politica-de-privacidade.component.css'
})
export class PoliticaDePrivacidadeComponent {

}
