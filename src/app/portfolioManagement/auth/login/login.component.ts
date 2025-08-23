import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';  
// import { AuthService } from '../../services/auth.service';
import { AuthService } from '../../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MdbFormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          console.log("✅ Login successful:", res);
          // ✅ Save token & expiration
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('tokenExpiry', res.expiration);
          this.router.navigate(['/admindashboard']); // redirect on success
        },
        error: (err) => {
          console.error("❌ Login failed:", err);
          this.errorMessage = 'Invalid email or password';
        }
      });
    } else {
      this.errorMessage = 'Please enter valid credentials';
    }
  }
}
