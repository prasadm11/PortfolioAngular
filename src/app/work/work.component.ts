import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  cards = [
  {
    meta: 'AIRBNB · 2023',
    title: 'Curating AR experiences while travelling',
    points: ['Onboarding increased to 12%', 'New user signups increased by 32%', 'Engagement increased by 20%'],
    image: '/assets/ar-preview.png'
  },
  {
    meta: 'GOOGLE · 2022',
    title: 'Optimizing UX for Search Console',
    points: ['Bounce rate reduced by 15%', 'SEO score improved', 'Increased dashboard usage'],
    image: '/assets/google-preview.png'
  },
  {
    meta: 'NIKE · 2021',
    title: 'Immersive E-Commerce Experience',
    points: ['Conversion improved by 27%', 'Faster page loads', 'High user retention'],
    image: '/assets/nike-preview.png'
  }
];


}
