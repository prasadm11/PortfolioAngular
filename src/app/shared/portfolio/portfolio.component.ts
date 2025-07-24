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

      const map = leaflet.map('leaflet-map').setView([19.141467, 73.008403], 8); // Navi Mumbai zoom level

      leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 30,
        })
        .addTo(map);

      leaflet
        .marker([19.141467, 73.008403])
        .addTo(map)
        .bindPopup('Navi Mumbai, India')
        .openPopup();
    }
  }
  logos: string[] = [
  'https://www.svgrepo.com/show/354987/figma.svg',
  'https://www.svgrepo.com/show/331642/webflow.svg',
  'https://www.svgrepo.com/show/306484/notion.svg'
];

}
