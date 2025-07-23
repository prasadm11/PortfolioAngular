import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
