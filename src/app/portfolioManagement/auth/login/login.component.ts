import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';  
// import { MdbButtonsModule } from 'mdb-angular-ui-kit/buttons'; 


@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, MdbFormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  email = "";
  password = "";

  onLogin() {
    console.log("Email:", this.email, "Password:", this.password);
  }
}
