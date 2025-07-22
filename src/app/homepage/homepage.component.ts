import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
import { LogoCarouselComponent } from "../logo-carousel/logo-carousel.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { StackedCardsComponent } from "../shared/stacked-cards/stacked-cards.component";
import { WorkComponent } from "../work/work.component";

@Component({
  selector: 'app-homepage',
  imports: [LogoCarouselComponent, FooterComponent, HeaderComponent, StackedCardsComponent, WorkComponent],
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
