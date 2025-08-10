import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Faq {
  question: string;
  answer: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})

export class FaqComponent implements OnInit{
  
  readonly faqs: Faq[] = [
    {
      question: 'Are you available to hire full time?',
      answer: `At the moment, I’m pretty happy where I am. Currently I am not looking for any full-time opportunities, but I’m open to interesting collaborations or freelance gigs.`,
      isOpen: false,
    },
    {
      question: 'Can you facelift my design?',
      answer: `Absolutely! I love redesign challenges. Send me your current design or project and I’ll assess how to enhance it visually and functionally.`,
      isOpen: false
    },
    {
      question: 'What technologies do you work with?',
      answer: `I work mainly with Angular, .NET Core, and SQL Server. I'm also experienced with ASP.NET MVC, RxJS, Entity Framework, and various tools like Swagger, Azure DevOps, and Docker (basic).`,
      isOpen: false
    },
    {
      question: 'What kind of projects have you worked on?',
      answer: `I’ve built enterprise-grade web apps including a Community Court of Justice Portal and a Vehicle Rental System. I’ve also developed an AI Music Recommendation System using Python and ML libraries.`,
      isOpen: false
    },
    {
      question: 'Are you open to freelance or contract work?',
      answer: `Yes, I’m open to freelance or part-time projects that align with my skill set and schedule. Feel free to reach out with your project details.`,
      isOpen: false
    }
  ];
  ngOnInit(): void {
    this.closeAllFaqs();
  }

  toggleFAQ(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.isOpen = i === index ? !faq.isOpen : false; 
    });
  }
  trackByFaq(index: number, faq: Faq) {
    return faq.question; 
  }
  private closeAllFaqs() {
    this.faqs.forEach(faq => (faq.isOpen = false));
  }

}
