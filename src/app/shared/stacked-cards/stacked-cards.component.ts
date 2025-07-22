import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stacked-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stacked-cards.component.html',
  styleUrls: ['./stacked-cards.component.css']
})
export class StackedCardsComponent {
 works = [
    {
      meta: 'AIRBNB · 2023',
      title: 'Curating AR experiences while travelling',
      highlights: [
        'Onboarding increased to 12%',
        'New users signups increased by 32%',
        'Engagement increased by 20%',
      ],
      link: '#',
      image: '/assets/ar-preview.png',
    },
    {
      meta: 'PROJECT · 2024',
      title: 'Another Project Title',
      highlights: ['Point A', 'Point B', 'Point C'],
      link: '#',
      image: '/assets/ar-preview.png',
    },
    {
      meta: 'PROJECT · 2025',
      title: 'Third Featured Project',
      highlights: ['Some Key Result', 'Metric Improvement', 'Design Success'],
      link: '#',
      image: '/assets/ar-preview.png',
    },
  ];
}
