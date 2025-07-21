import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { SkillsCarouselComponent } from "../shared/skills-carousel/skills-carousel.component";
@Component({
  selector: 'app-homepage',
  imports: [FooterComponent, HeaderComponent, CarouselComponent, SkillsCarouselComponent],
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
