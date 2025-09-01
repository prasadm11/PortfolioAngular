// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailRequest {
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // private apiUrl = 'https://localhost:7211/api/Email/send'; // backend API

    private apiUrl = 'https://portfoliomanagementsys-3.onrender.com/api/Email/send'; // backend API


  constructor(private http: HttpClient) {}

  sendEmail(request: EmailRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, request);
  }
}
