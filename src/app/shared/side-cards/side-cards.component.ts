import { Component } from '@angular/core';

@Component({
  selector: 'app-side-cards',
  imports: [],
  templateUrl: './side-cards.component.html',
  styleUrl: './side-cards.component.css'
})
export class SideCardsComponent {
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

  getCardTransform(index: number): string {
    const angle = (index - (this.cards.length - 1) / 2) * 10; // spread the cards in an arc
    const translateY = Math.abs(index - (this.cards.length - 1) / 2) * 5; // slight vertical offset for realism
    return `rotate(${angle}deg) translateY(-${translateY}px)`;
  }
}
