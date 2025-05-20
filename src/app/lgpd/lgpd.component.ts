import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-lgpd',
  imports: [RouterLink, CabecalhoComponent],
  templateUrl: './lgpd.component.html',
  styleUrl: './lgpd.component.css'
})
export class LgpdComponent {

}
