import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-politica-de-privacidade',
  imports: [RouterLink, CabecalhoComponent, NavbarComponent],
  templateUrl: './politica-de-privacidade.component.html',
  styleUrl: './politica-de-privacidade.component.css'
})
export class PoliticaDePrivacidadeComponent {

}
