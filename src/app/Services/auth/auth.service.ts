// // src/app/services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   // private apiUrl = 'https://localhost:7211/api/Auth';
//   private apiUrl = 'https://portfoliomanagementsys-3.onrender.com/api/Auth'
//   constructor(private http: HttpClient) {}

//   // Login API call
//   login(credentials: { email: string; password: string }): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
//       tap((response) => {
//         // If token comes in response, store it
//         if (response && response.token) {
//           localStorage.setItem('token', response.token);
//         }
//       })
//     );
//   }

//   // Save token
//   setToken(token: string): void {
//     localStorage.setItem('token', token);
//   }

//   // Get token
//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   // Check if logged in
//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }

//   // Logout
//   logout(): void {
//     localStorage.removeItem('token');
//   }

//   // Example for authorized requests
//   getAuthHeaders(): HttpHeaders {
//     return new HttpHeaders({
//       Authorization: `Bearer ${this.getToken()}`
//     });
//   }
// }


// src/app/services/auth.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://portfoliomanagementsys-3.onrender.com/api/Auth';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        if (response && response.token && isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null; // SSR safe
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken() ?? ''}`
    });
  }
}
