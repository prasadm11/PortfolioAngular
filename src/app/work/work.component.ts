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
    meta: 'JSPM · 2024',
    title: 'AI Music Recommendation System',
    points: ['Onboarding increased to 12%', 'New user signups increased by 32%', 'Engagement increased by 20%'],
    image: '/assets/ar-preview.png',
    link: '/case-study/ar'
  },
  {
    meta: 'Neosoft · 2025',
    title: 'Vehicle Rental System',
    points: ['Bounce rate reduced by 15%', 'SEO score improved', 'Increased dashboard usage'],
    image: '/assets/google-preview.png',
    link: '/case-study/ar'
  },
  {
    meta: 'Neosoft · 2025',
    title: 'Comunity Court Of justice',
    points: ['Conversion improved by 27%', 'Faster page loads', 'High user retention'],
    image: '/assets/nike-preview.png',
    link: '/case-study/ar'
  }
];

getGradient(index: number): string {
  const baseDarkness = 25;
  const darknessIncrement = 10;
  const darkness = baseDarkness + (index+10) * darknessIncrement;
  const darkColor = `rgb(${darkness}, ${darkness + 20}, ${darkness + 40})`;
  const darkerColor = `rgb(${darkness - 10}, ${darkness}, ${darkness + 20})`;

  return `linear-gradient(to right, ${darkColor}, ${darkerColor})`;
}

getOverlay(index: number): string {
  const darkness = 0.5 + index * 5; // increases with index
  return `linear-gradient(to right, rgba(13,27,42,${darkness}), rgba(27,38,59,${darkness}))`;
}

}
