import { Component } from '@angular/core';
import { Usuario } from '../../../../models/usuario.model';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-formulario-login',
  imports: [FormsModule, NgIf],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  nome:string = '';
  senha:string = '';
  erro:string = ''

  constructor(private loginservice:LoginService, private router:Router) { }

  teste(){
    this.loginservice.getlogin(this.nome, this.senha).subscribe({
      next: (res) => {
        this.router.navigate(['/home']);
        this.erro = '';
      },
      error: (err: any) => {
        this.erro = err.error.message;
      }
    });
  }
}
