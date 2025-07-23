import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoCarouselComponent } from './logo-carousel/logo-carousel.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  }
  
];
