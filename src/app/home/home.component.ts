import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentImage: string = 'img/carousel-1.jpg'; // Image initiale du carrousel

  constructor() { }

  changeImage(): void {
    // Changez l'image actuelle en fonction de la logique de votre application
    this.currentImage = 'img/carousel-2.jpg';
  }
}
