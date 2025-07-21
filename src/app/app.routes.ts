import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoCarouselComponent } from './logo-carousel/logo-carousel.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  
];
