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
  }

  logos: string[] = [
    'https://www.svgrepo.com/show/354987/figma.svg',
    'https://www.svgrepo.com/show/331642/webflow.svg',
    'https://www.svgrepo.com/show/306484/notion.svg',
  ];
}
