// import { Injectable } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard  {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//   const token = localStorage.getItem('authToken');
//   const expiry = localStorage.getItem('tokenExpiry');

//   if (token && expiry && new Date(expiry) > new Date()) {
//     return true;
//   } else {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('tokenExpiry');
//     this.router.navigate(['/login']);
//     return false;
//   }
// }
// }



// src/app/guards/auth.guard.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      const expiry = localStorage.getItem('tokenExpiry');

      if (token && expiry && new Date(expiry) > new Date()) {
        return true;
      } else {
        localStorage.removeItem('authToken');
        localStorage.removeItem('tokenExpiry');
        this.router.navigate(['/login']);
        return false;
      }
    }

    // SSR: safe default (deny access)
    return false;
  }
}
