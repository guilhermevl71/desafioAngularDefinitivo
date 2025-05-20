import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CabecalhoComponent } from '../../cabecalho/cabecalho.component';

@Component({
  selector: 'app-bronco',
  imports: [NavbarComponent, CabecalhoComponent],
  templateUrl: './bronco.component.html',
  styleUrl: './bronco.component.css'
})
export class BroncoComponent {

}
