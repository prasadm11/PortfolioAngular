import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
currentRoute = '';
activeSection = '';  
  constructor(private router: Router) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.setInitialActive();
    // Subscribe to router events to track current URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
      this.updateActiveNav();
    });
  }

  ngAfterViewInit() {
    this.updateActiveNav();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateActiveNav();
  }

  private setInitialActive() {
    const homeLink = document.querySelector('#mainNav .nav-link[href="#home"]');
    homeLink?.classList.add('active');
  }

  private updateActiveNav() {
    if (this.currentRoute === '/about') {
    this.activeSection = 'aboutme';
    // Remove all active classes first
    const navLinks = document.querySelectorAll('#mainNav .nav-link');
    navLinks.forEach((link) => link.classList.remove('active'));
    // Then set About link active manually
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === '#aboutme') {
        link.classList.add('active');
      }
    });
    return;
  }
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#mainNav .nav-link');

    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach((section) => {
      const top = (section as HTMLElement).offsetTop;
      const height = (section as HTMLElement).clientHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
}
