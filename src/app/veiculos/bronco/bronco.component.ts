import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-bronco',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './bronco.component.html',
  styleUrl: './bronco.component.css'
})
export class BroncoComponent {

}
