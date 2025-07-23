import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-cards',
  imports: [CommonModule],
  templateUrl: './side-cards.component.html',
  styleUrl: './side-cards.component.css'
})
export class SideCardsComponent {
  cards = [
    { image: 'assets/cards/ace-spades.png' },
    { image: 'assets/cards/king-hearts.png' },
    { image: 'assets/cards/queen-clubs.png' },
    { image: 'assets/cards/jack-diamonds.png' },
    { image: 'assets/cards/10-spades.png' }
  ];

  getCardTransform(index: number): string {
    const overlap = 40; // pixels each card overlaps the previous one
    const rotate = (index - (this.cards.length - 1) / 2) * 4; // less curve, more linear
    const translateX = index * overlap;
    return `translateX(${translateX}px) rotate(${rotate}deg)`;
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
  }
}