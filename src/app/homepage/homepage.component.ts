import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
import { LogoCarouselComponent } from "../logo-carousel/logo-carousel.component";

@Component({
  selector: 'app-homepage',
  imports: [LogoCarouselComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  

  carouselImages: string[] = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3'
];

skills = ['Angular', 'TypeScript', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

}
