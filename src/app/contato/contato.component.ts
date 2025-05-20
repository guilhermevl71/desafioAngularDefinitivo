import { Component, AfterViewInit } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  imports: [CabecalhoComponent, NavbarComponent, RouterLink]
})
export class ContatoComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    class Contato {
      constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        public cpf: string,
        public telefone: string,
        public contato: string
      ) {}
    }

    const checkbox = document.getElementById("checkboxid") as HTMLInputElement | null;
    const button = document.getElementById("buttonid") as HTMLButtonElement | null;

    function desabilitarbutton() {
      if (!checkbox || !button) return;

      if (!checkbox.checked) {
        button.disabled = true;
        button.style.opacity = "0.5";
      } else {
        button.disabled = false;
        button.style.opacity = "1";
      }
    }

    checkbox?.addEventListener("change", desabilitarbutton);
    desabilitarbutton();
    (window as any).Post = function (form: HTMLFormElement) {
      const data = new Contato(
        (form.elements.namedItem("nome") as HTMLInputElement)?.value || "",
        (form.elements.namedItem("sobrenome") as HTMLInputElement)?.value || "",
        (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
        (form.elements.namedItem("cpf") as HTMLInputElement)?.value || "",
        (form.elements.namedItem("telefone") as HTMLInputElement)?.value || "",
        (form.elements.namedItem("contato") as HTMLInputElement)?.value || ""
      );

      const dados = JSON.stringify(data);
      localStorage.setItem("formulario", dados);
    };

    (window as any).Enviar = function () {
      const nome = (document.getElementById("nomeid") as HTMLInputElement)?.value || "";
      const email = (document.getElementById("emailid") as HTMLInputElement)?.value || "";
      const cpf = (document.getElementById("cpfid") as HTMLInputElement)?.value || "";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert("Escreva um email válido!");
        return;
      }

      if (cpf.length !== 11) {
        alert("CPF inválido");
        return;
      }

      if (nome !== "") {
        alert(`Obrigado sr(a) ${nome}, os seus dados foram encaminhados com sucesso`);
      }

      const dadosform = localStorage.getItem("formulario");
      alert(dadosform);

      const form = document.querySelector("form") as HTMLFormElement | null;
      form?.reset();
    };
  }
}
