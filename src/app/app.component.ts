import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from "./rodape/rodape.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ford';
}
