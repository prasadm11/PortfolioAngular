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
    image: 'https://i0.wp.com/aimi.fm/wp-content/uploads/2025/03/Frame-23.png?resize=1024%2C768&quality=80&ssl=1',
    link: 'https://github.com/prasadm11/AI-music-recommendation-system.git'
  },
  {
    meta: 'Neosoft · 2025',
    title: 'Vehicle Rental System',
    points: ['Bounce rate reduced by 15%', 'SEO score improved', 'Increased dashboard usage'],
    image: '/assets/img/projects/vehiclerental.png',
    link: 'https://github.com/prasadm11/Vehicle-Rental-System.git'
  },
  {
    meta: 'Neosoft · 2025',
    title: 'Comunity Court Of justice',
    points: ['Conversion improved by 27%', 'Faster page loads', 'High user retention'],
    image: '/assets/img/projects/ccjmac.png',
    link: 'https://github.com/foram6615/CommunityCourt-FrontEnd.git'
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
