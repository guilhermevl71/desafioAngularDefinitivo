import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-comparacao',
  imports: [NavbarComponent, CabecalhoComponent],
  templateUrl: './comparacao.component.html',
  styleUrls: ['./comparacao.component.css']
})
export class ComparacaoComponent implements AfterViewInit {

  ngAfterViewInit(): void {

    // car
    let carArr: Array<any> = [];

    class Car {
      constructor(
        public nome: any,
        public preco: any,
        public alturaCacamba: any,
        public alturaVeiculo: any,
        public alturaSolo: any,
        public capacidadeCarga: any,
        public motor: any,
        public potencia: any,
        public volumeCacamba: any,
        public roda: any,
        public image: any
      ) {}
    }

    function GetCarArrPosition(arr: any[], carClass: any) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome) return i;
      }
      return -1;
    }

    function desabilitarcheckbox() {
      const checkboxes = document.querySelectorAll(".checkbox") as NodeListOf<HTMLInputElement>;

      if (carArr.length >= 2) {
        checkboxes.forEach(cb => {
          if (!cb.checked) {
            cb.disabled = true;
            cb.parentElement!.style.opacity = "0.5";
            cb.closest("li")!.style.opacity = "0.70";
          }
        });
      } else {
        checkboxes.forEach(cb => {
          cb.disabled = false;
          cb.parentElement!.style.opacity = "1";
          cb.closest("li")!.style.opacity = "1";
        });
      }
    }

    function SetCarToCompare(el: HTMLInputElement, carClass: any) {
      if (carClass instanceof Car) {
        let index = GetCarArrPosition(carArr, carClass);
        if (el.checked === true && index === -1 && carArr.length < 2) {
          carArr.push(carClass);
        } else {
          carArr.splice(index, 1);
        }
        desabilitarcheckbox();
      } else {
        throw "You need set a Car Class";
      }
    }

    function ShowCompare() {
      if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
      }

      UpdateCompareTable();
      document.getElementById("compare")!.style.display = "block";
    }

    function HideCompare() {
      document.getElementById("compare")!.style.display = "none";
    }

    function UpdateCompareTable() {
      (document.getElementById("compare_image_0") as HTMLImageElement).src = carArr[0].image;
      (document.getElementById("compare_image_1") as HTMLImageElement).src = carArr[1].image;


      document.getElementById("compare_preco_0")!.innerText = `R$ ${carArr[0].preco.toLocaleString('pt-BR')}`;
      document.getElementById("compare_preco_1")!.innerText = `R$ ${carArr[1].preco.toLocaleString('pt-BR')}`;

      document.getElementById("compare_alturacacamba_0")!.innerText = carArr[0].alturaCacamba;
      document.getElementById("compare_alturacacamba_1")!.innerText = carArr[1].alturaCacamba;

      document.getElementById("compare_alturaveiculo_0")!.innerText = carArr[0].alturaVeiculo;
      document.getElementById("compare_alturaveiculo_1")!.innerText = carArr[1].alturaVeiculo;

      document.getElementById("compare_alturasolo_0")!.innerText = carArr[0].alturaSolo;
      document.getElementById("compare_alturasolo_1")!.innerText = carArr[1].alturaSolo;

      document.getElementById("compare_capacidadecarga_0")!.innerText = carArr[0].capacidadeCarga;
      document.getElementById("compare_capacidadecarga_1")!.innerText = carArr[1].capacidadeCarga;

      document.getElementById("compare_motor_0")!.innerText = carArr[0].motor;
      document.getElementById("compare_motor_1")!.innerText = carArr[1].motor;

      document.getElementById("compare_potencia_0")!.innerText = carArr[0].potencia;
      document.getElementById("compare_potencia_1")!.innerText = carArr[1].potencia;

      document.getElementById("compare_volumecacamba_0")!.innerText = carArr[0].volumeCacamba;
      document.getElementById("compare_volumecacamba_1")!.innerText = carArr[1].volumeCacamba;

      document.getElementById("compare_roda_0")!.innerText = carArr[0].roda;
      document.getElementById("compare_roda_1")!.innerText = carArr[1].roda;

      document.getElementById("compare_modelo_0")!.innerText = carArr[0].nome;
      document.getElementById("compare_modelo_1")!.innerText = carArr[1].nome;
    }

    // Expor funções globalmente se necessário (ex: para usar no HTML)
    (window as any).SetCarToCompare = SetCarToCompare;
    (window as any).ShowCompare = ShowCompare;
    (window as any).HideCompare = HideCompare;
  }
}
