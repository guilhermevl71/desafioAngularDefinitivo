import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-carrosel',
  imports: [RouterLink],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css'
})

export class CarroselComponent  {
}
