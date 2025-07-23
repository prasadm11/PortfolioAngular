import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})

export class FaqComponent {
  faqs = [
    {
      question: 'Are you available to hire full time?',
      answer: `At the moment, I’m pretty happy where I am. Currently I am not looking for any full-time opportunities...`,
      isOpen: true,
    },
    {
      question: 'How do your quote pricing works and when can we get on call?',
      answer: `Pricing depends on the scope. I usually start with a call to understand your needs...`,
      isOpen:false
    },
    {
      question: 'Can you facelift my design?',
      answer: `Absolutely! I love redesign challenges. Send me your current design...`,
       isOpen: false
    },
  ];

  toggleFAQ(faq: any) {
    faq.isOpen = !faq.isOpen;
  }

}
