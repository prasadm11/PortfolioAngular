import { Component ,HostListener} from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent],
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
