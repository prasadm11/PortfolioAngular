import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contact {
  id? :number,
  name: string;
  email: string;
  message: string;
  createdOn?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // private apiUrl = 'https://localhost:7211/api/Contact';

  private apiUrl = 'https://portfoliomanagementsys-3.onrender.com/api/Contact';

  constructor(private http: HttpClient) {}

  // Get all contacts
  getAll(): Observable<Contact[]> {
     const token = localStorage.getItem('token'); // or sessionStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Contact[]>(this.apiUrl, { headers });

  }
  

  // Get contact by ID
  getById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`);
  }

  // Create new contact (from contact form)
  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  // Update contact
  update(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact);
  }

  // Delete contact
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
