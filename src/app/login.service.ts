import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API = 'https://desafio-angular-definitivo.onrender.com/login'

  constructor(private http: HttpClient) { }

  getlogin(nome: string, senha: string): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, { nome, senha });
  }
}
