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
    { label: 'Ace of Spades', image: 'assets/cards/ace-spades.png' },
    { label: 'King of Hearts', image: 'assets/cards/king-hearts.png' },
    { label: 'Queen of Clubs', image: 'assets/cards/queen-clubs.png' },
    { label: 'Jack of Diamonds', image: 'assets/cards/jack-diamonds.png' },
    { label: '10 of Spades', image: 'assets/cards/10-spades.png' }
  ];

  getCardTransform(index: number): string {
    const angle = (index - (this.cards.length - 1) / 2) * 10;
    const translateY = Math.abs(index - (this.cards.length - 1) / 2) * 5;
    return `rotate(${angle}deg) translateY(-${translateY}px)`;
  }

  handleMouseMove(event: MouseEvent, index: number): void {
    const card = (event.currentTarget as HTMLElement);
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