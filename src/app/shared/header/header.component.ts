import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,AfterViewInit{
  ngOnInit() {
    this.setInitialActive();
  }

  ngAfterViewInit() {
    this.updateActiveNav();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateActiveNav();
  }

  private setInitialActive() {
    const homeLink = document.querySelector('#mainNav .nav-link[href="#home"]') as HTMLElement;
    if (homeLink) {
      homeLink.classList.add('active');
    }
  }

  private updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#mainNav .nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section: Element) => {
      const htmlSection = section as HTMLElement;
      const sectionTop = htmlSection.offsetTop;
      const sectionHeight = htmlSection.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link: Element) => {
      const htmlLink = link as HTMLElement;
      htmlLink.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        htmlLink.classList.add('active');
      }
    });
  }

}
