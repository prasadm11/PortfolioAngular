import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router) {}

  canActivate(): boolean {
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
}
