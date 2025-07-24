import { Component ,HostListener} from '@angular/core';

import { SideCardsComponent } from "../shared/side-cards/side-cards.component";
import { PortfolioComponent } from "../shared/portfolio/portfolio.component";
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-about',
  imports: [SideCardsComponent, PortfolioComponent,ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  rotation = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.rotation = scrollY * 0.9; // control speed here

    const icon = document.querySelector('.pixel-icon') as HTMLElement;
    if (icon) {
      icon.style.transform = `rotate(${this.rotation}deg)`;
    }
  }

}
