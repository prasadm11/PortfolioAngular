import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-cards',
  imports: [CommonModule],
  templateUrl: './side-cards.component.html',
  styleUrl: './side-cards.component.css',
})
export class SideCardsComponent {
  hoveredIndex: number | null = null;

  cards = [
    // { image: 'https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg' },
    // { image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg' },
    // { image: 'https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg' },
    // { image: 'https://images.pexels.com/photos/1019771/pexels-photo-1019771.jpeg' },
    // { image: 'https://images.pexels.com/photos/13374150/pexels-photo-13374150.jpeg' },
    { image: 'assets/img/sidecard/img/img4.jpg' },
    { image: 'assets/img/sidecard/img/img2.jpg' },
    { image: 'assets/img/sidecard/img/img3.jpg' },
    { image: 'assets/img/sidecard/img/img1 (1).jpg' },
    { image: 'assets/img/sidecard/img/img5.jpg' },
  ];

  getCardTransform(index: number): string {
    const overlap = 90; // horizontal shift between cards
    const rotate = (index - (this.cards.length - 1) / 2) * 4; // rotation for fan-like layout

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
    const shift = 40; // how far non-hovered cards move away
    const translateX = index * overlap + direction * shift;

    return `translateX(${translateX}px) scale(0.95) rotate(${rotate}deg)`;
  }

  handleMouseMove(event: MouseEvent, index: number): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);
    card.style.transform += ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  resetTilt(index: number): void {
    const cards = document.querySelectorAll('.card');
    const card = cards[index] as HTMLElement;
    card.style.transform = this.getCardTransform(index);
    this.hoveredIndex = null;
  }
}
