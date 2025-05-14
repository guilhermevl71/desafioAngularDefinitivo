import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  imports: [],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css'
})

export class CarroselComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    class Carousel {
      constructor(images: any[], interval = 90000) {
        this.images = images;
        this.index = 0;
        this.intervalTime = interval;
        this.timer = null;

        this.imageElement = document.getElementById("carouselImage") as HTMLImageElement;
        this.titleElement = document.getElementById("carouselTitle")!;
        this.titleElement2 = document.getElementById("carouselTitle2")!;
        this.linkElement = document.getElementById("carouselLink") as HTMLAnchorElement;
        this.paragraphElement = document.getElementById("carouselparagraph")!;
        this.prevBtn = document.getElementById("prevBtn")!;
        this.nextBtn = document.getElementById("nextBtn")!;

        this.prevBtn.addEventListener("click", () => this.back());
        this.nextBtn.addEventListener("click", () => this.next());

        this.updateCarousel();
        this.startAutoSlide();
      }

      updateCarousel() {
        const currentItem = this.images[this.index];
        this.imageElement.src = currentItem.image;
        this.imageElement.alt = currentItem.title || '';
        this.titleElement.textContent = currentItem.title || '';
        this.titleElement2.textContent = currentItem.title2 || '';
        this.paragraphElement.textContent = currentItem.paragraph || '';
        this.linkElement.href = currentItem.url;
        document.getElementById("cont")!.textContent = (this.index + 1).toString();
      }

      next() {
        this.index = (this.index + 1) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
      }

      back() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
      }

      startAutoSlide() {
        this.timer = setInterval(() => this.next(), this.intervalTime);
      }

      resetTimer() {
        clearInterval(this.timer);
        this.startAutoSlide();
      }

      images: any[];
      index: number;
      intervalTime: number;
      timer: any;

      imageElement: HTMLImageElement;
      titleElement: HTMLElement;
      titleElement2: HTMLElement;
      paragraphElement: HTMLElement;
      linkElement: HTMLAnchorElement;
      prevBtn: HTMLElement;
      nextBtn: HTMLElement;
    }

    const images = [
      {
        image: "assets/teste.jpg",
        title: "Nova Ford Ranger Black",
        paragraph: "Raça Forte Também No Asfalto",
        url: "lancamento.html"
      },
      {
        image: "assets/teste3.jpg",
        title2: "Ford a Nossa História",
        url: "lancamento.html"
      },
      {
        image: "assets/teste4.jpg",
        paragraph: "O ícone da aventura, agora no Brasil.",
        title: "Novo Ford Bronco Sport",
        url: "lancamento.html"
      }
    ];

    new Carousel(images);
  }
}
