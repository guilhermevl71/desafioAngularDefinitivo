import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-carrosel',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css'
})

export class CarroselComponent  {
}
