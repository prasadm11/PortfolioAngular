import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngOnInit(): Promise<void> {
    if (this.isBrowser) {
      const leaflet = await import('leaflet');

      const map = leaflet
        .map('leaflet-map')
        .setView([19.141467, 73.008403], 10);

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 30,
        })
        .addTo(map);

      const pulsingIcon = leaflet.divIcon({
        className: '',
        iconSize: [50, 50],
        iconAnchor: [30, 30],
        html: `
    <div style="
      position: relative;
      width: 60px;
      height: 60px;
    ">
      <div style="
        position: absolute;
        width: 60px;
        height: 60px;
        background: rgba(0, 183, 255, 0.3);
        border-radius: 50%;
        animation: pulseAnim 2s ease-out infinite;
        top: 0;
        left: 0;
        z-index: 1;
      "></div>
      <div style="
        position: absolute;
        width: 60px;
        height: 60px;
        background-image: url('https://framerusercontent.com/images/0zTjgieXhOfPqRHv3jzAaIqlRw.png');
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        top: 0;
        left: 0;
        z-index: 2;
      "></div>
    </div>
  `,
      });

      leaflet
        .marker([19.141467, 73.008403], { icon: pulsingIcon })
        .addTo(map)
        .bindPopup('I live Here')
        .openPopup();
    }

    this.tags.forEach(tag => {
      const top = Math.random() * 200;
      const left = Math.random() * 200;
      tag.top = tag.startTop = top;
      tag.left = tag.startLeft = left;
    });
  }

  logos: string[] = [
    'https://www.svgrepo.com/show/354987/figma.svg',
    'https://www.svgrepo.com/show/331642/webflow.svg',
    'https://www.svgrepo.com/show/306484/notion.svg',
  ];

  tags = [
  { label: 'Social-animal 🧑‍🤝‍🧑', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Night-Owl 🦉', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Traveller ✈️', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Tech Geek 🤖', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Foodie 🍔', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Fitness Freak 💪', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Bookworm 📚', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Pet Lover 🐶', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Artist 🎨', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false },
  { label: 'Gamer 🎮', top: 0, left: 0, startTop: 0, startLeft: 0, dragging: false }
];


  private dragOffset = { x: 0, y: 0 };
  private activeTag: any = null;

  // ngOnInit(): void {
  //   // Randomize initial position
  //   this.tags.forEach(tag => {
  //     const top = Math.random() * 200;
  //     const left = Math.random() * 200;
  //     tag.top = tag.startTop = top;
  //     tag.left = tag.startLeft = left;
  //   });
  // }

  startDrag(event: MouseEvent, tag: any) {
    event.preventDefault();
    tag.dragging = true;
    this.activeTag = tag;
    this.dragOffset = {
      x: event.clientX - tag.left,
      y: event.clientY - tag.top
    };
  }

  onDrag(event: MouseEvent, tag: any) {
    if (!tag.dragging) return;
    tag.top = event.clientY - this.dragOffset.y;
    tag.left = event.clientX - this.dragOffset.x;
  }

  endDrag(tag: any) {
    if (!tag.dragging) return;
    tag.dragging = false;
    // Reset to original position
    // tag.top = tag.startTop;
    // tag.left = tag.startLeft;
    // this.activeTag = null;
  }

  resetTags() {
  this.tags.forEach(tag => {
    tag.top = tag.startTop;
    tag.left = tag.startLeft;
  });
}

}
