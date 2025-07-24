import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Software Developer',
      company: 'NeoSoft',
      duration: 'Jan 2025 – Present',
      location: 'Mumbai, India',
      description:
        'Worked on .net web api, implemented secure api and designed a angular site with .net core..',
      collaborators: [],
    },
    {
      role: 'Python Developer',
      company: 'Hackveda',
      duration: 'June 2024 – Dec 2024',
      location: 'Delhi, India',
      description:
        'Worked on widgets and charts, generating technical content and collaborating with other designers.',
      collaborators: [
        'assets/team1.png',
        'assets/team2.png',
        'assets/team3.png',
      ],
    },
    {
      role: 'Product Designer',
      company: 'Toppr',
      duration: 'May 2022 – Aug 2022',
      location: 'Bangalore, India',
      description:
        'Focused on visual design and platform elements to improve data-driven interactions for users.',
    },
  ];

}
