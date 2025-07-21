import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-carousel',
  imports: [],
  templateUrl: './skills-carousel.component.html',
  styleUrl: './skills-carousel.component.css'
})
export class SkillsCarouselComponent {
 @Input() skills: string[] = ['hii'];
 

}
