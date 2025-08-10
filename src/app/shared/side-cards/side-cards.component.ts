import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-cards',
  imports: [CommonModule],
  templateUrl: './side-cards.component.html',
  styleUrl: './side-cards.component.css',
})
export class SideCardsComponent implements OnInit, OnDestroy, AfterViewInit {
  hoveredIndex: number | null = null;
  isMobile = false;
  animationId: number | null = null;
  speed = 0.7; // pixels per frame
  isDragging = false;
  touchStartX = 0;
  scrollLeft = 0;
  cardWidth = 230;

  cards = [
    { image: 'assets/img/sidecard/img/img4.webp' },
    { image: 'assets/img/sidecard/img/img2.webp' },
    { image: 'assets/img/sidecard/img/img3.webp' },
    { image: 'assets/img/sidecard/img/img1 (1).webp' },
    { image: 'assets/img/sidecard/img/img5.webp' },
  ];

  clonedCards = [...this.cards];
  @ViewChild('cardsContainer', { static: false })
  containerRef!: ElementRef<HTMLDivElement>;
  ngOnInit() {
    this.checkMobileView();
    if (this.isMobile) {
      // Clone cards for seamless looping
      this.clonedCards = [...this.cards, ...this.cards];
      setTimeout(() => this.startAutoScroll(), 1000);
    }
  }
  ngAfterViewInit() {
    if (this.isMobile) {
      this.clonedCards = [...this.cards, ...this.cards];
      requestAnimationFrame(() => this.startAutoScroll());
    }
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  @HostListener('window:resize')
  checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
  }

  startAutoScroll() {
    const container = this.containerRef.nativeElement;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2; // Since we duplicated the cards

    const animate = () => {
      this.scrollLeft += this.speed;

      // Reset to start when we've scrolled halfway
      if (this.scrollLeft >= scrollWidth) {
        this.scrollLeft = 0;
      }

      container.scrollLeft = this.scrollLeft;
      this.animationId = requestAnimationFrame(animate);
    };

    this.animationId = requestAnimationFrame(animate);
  }

  getCardTransform(index: number): string {
    if (this.isMobile) return 'none';

    const overlap = 90;
    const rotate = (index - (this.cards.length - 1) / 2) * 4;

    if (this.hoveredIndex === null) {
      const translateX = index * overlap;
      return `translateX(${translateX}px) rotate(${rotate}deg)`;
    }

    if (index === this.hoveredIndex) {
      return `translateY(-20px) scale(1.1) translateX(${
        index * overlap
      }px) rotate(${rotate}deg)`;
    }

    const direction = index < this.hoveredIndex ? -1 : 1;
    const shift = 40;
    const translateX = index * overlap + direction * shift;

    return `translateX(${translateX}px) scale(0.95) rotate(${rotate}deg)`;
  }

  // Mobile touch events
  onTouchStart(event: TouchEvent) {
    if (!this.isMobile) return;
    this.touchStartX = event.touches[0].clientX;
    this.isDragging = true;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isMobile || !this.isDragging) return;
    const container = this.containerRef?.nativeElement;
    if (!container) return;

    const touchX = event.touches[0].clientX;
    const diff = this.touchStartX - touchX;
    this.scrollLeft += diff;

    // Clamp scrollLeft so it stays within bounds (optional, safer UX)
    if (this.scrollLeft < 0) this.scrollLeft = 0;
    if (this.scrollLeft > container.scrollWidth - container.clientWidth) {
      this.scrollLeft = container.scrollWidth - container.clientWidth;
    }

    container.scrollLeft = this.scrollLeft;
    this.touchStartX = touchX;
  }

  onTouchEnd() {
    if (!this.isMobile) return;
    this.isDragging = false;
    // Sync scrollLeft from the actual container's scrollLeft for smooth restart
    const container = this.containerRef?.nativeElement;
    if (container) {
      this.scrollLeft = container.scrollLeft;
    }
    if (!this.animationId) {
      this.startAutoScroll();
    }
  }
}
