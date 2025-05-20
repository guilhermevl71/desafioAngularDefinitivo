import { Component } from '@angular/core';
import { CabecalhoComponent } from '../../cabecalho/cabecalho.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-ranger',
  imports: [CabecalhoComponent, NavbarComponent],
  templateUrl: './ranger.component.html',
  styleUrl: './ranger.component.css'
})
export class RangerComponent {

}
