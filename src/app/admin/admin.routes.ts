import { Routes } from '@angular/router';
import { DashboardlayoutComponent } from './dashboardlayout/dashboardlayout.component';

export const ADMIN_ROUTES: Routes = [
    {
    path: '',
    redirectTo: 'dashboardlayout',
    pathMatch: 'full'
  },
  {
    path: 'dashboardlayout',
    component: DashboardlayoutComponent
  },
//   {
//   path: 'messages',
//   loadComponent: () =>
//     import('./messages/messages.component').then(m => m.MessagesComponent)
// },
// {
//   path: 'settings',
//   loadComponent: () =>
//     import('./settings/settings.component').then(m => m.SettingsComponent)
// },
// {
//   path: 'analytics',
//   loadComponent: () =>
//     import('./analytics/analytics.component').then(m => m.AnalyticsComponent)
// },
// {
//   path: 'portfolio',
//   loadComponent: () =>
//     import('./portfolio/portfolio.component').then(m => m.PortfolioComponent)
// },

];
