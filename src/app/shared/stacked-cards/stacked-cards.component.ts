import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stacked-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stacked-cards.component.html',
  styleUrls: ['./stacked-cards.component.css']
})
export class StackedCardsComponent {
  cards = Array(5).fill(0);
}
