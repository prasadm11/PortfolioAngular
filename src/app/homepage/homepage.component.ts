import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from "../shared/header/header.component";
@Component({
  selector: 'app-homepage',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
