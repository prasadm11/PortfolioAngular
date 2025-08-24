import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoCarouselComponent } from './logo-carousel/logo-carousel.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './portfolioManagement/auth/login/login.component';
import { AdmindashboardComponent } from './portfolioManagement/admindashboard/admindashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { ContactdialogComponent } from './contactdialog/contactdialog.component';
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
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admindashboard',
    component : AdmindashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'contactdialog',
    component:ContactdialogComponent
  }
  
];
