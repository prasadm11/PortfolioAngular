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
  

}
