import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FaqComponent } from '../faq/faq.component';
import { LogoCarouselComponent } from "../logo-carousel/logo-carousel.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { WorkComponent } from "../work/work.component";
import { AboutmeComponent } from "../aboutme/aboutme.component";
import { HeaderComponent } from '../shared/header/header.component';


@Component({
  selector: 'app-homepage',
  imports: [LogoCarouselComponent, FooterComponent, WorkComponent, AboutmeComponent,FaqComponent,HeaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageComponent{
  
  carouselImages: string[] = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3'
];

skills = ['Angular', 'TypeScript', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

}
