import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-cards',
  imports: [CommonModule],
  templateUrl: './side-cards.component.html',
  styleUrl: './side-cards.component.css'
})
export class SideCardsComponent {
  hoveredIndex: number | null = null;

  cards = [
    { image: 'assets/cards/ace-spades.png' },
    { image: 'assets/cards/king-hearts.png' },
    { image: 'assets/cards/queen-clubs.png' },
    { image: 'assets/cards/jack-diamonds.png' },
    { image: 'assets/cards/10-spades.png' }
  ];


getCardTransform(index: number): string {
  const overlap = 70; // horizontal shift between cards
  const rotate = (index - (this.cards.length - 1) / 2) * 4; // rotation for fan-like layout

  if (this.hoveredIndex === null) {
    const translateX = index * overlap;
    return `translateX(${translateX}px) rotate(${rotate}deg)`;
  }

  if (index === this.hoveredIndex) {
    return `translateY(-20px) scale(1.1) translateX(${index * overlap}px) rotate(${rotate}deg)`;
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