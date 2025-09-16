import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-dashboardlayout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './dashboardlayout.component.html',
  styleUrl: './dashboardlayout.component.css'
})
export class DashboardlayoutComponent {

}
