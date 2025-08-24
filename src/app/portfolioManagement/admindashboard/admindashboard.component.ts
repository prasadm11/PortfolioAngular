import { Component ,OnInit} from '@angular/core';
import { ContactService,Contact } from '../../Services/contact/contact.service';
import { log } from 'console';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EmailService , EmailRequest} from '../../Services/email/email.service';
import { MatDialog } from '@angular/material/dialog';
// import { ReplyDialogComponent } from '../reply-dialog/reply-dialog.component'; 
import { ReplydialogComponent } from './replydialog/replydialog.component';
@Component({
  selector: 'app-admindashboard',
  imports: [NgIf,NgFor,DatePipe],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent implements OnInit{
  contacts: Contact[] = [];
  loading = true;
  constructor(private contactService: ContactService,private router: Router,private emailService : EmailService ,
  private dialog: MatDialog ) {}
   ngOnInit(): void {
    this.contactService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.contacts = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching contacts', err);
        this.loading = false;
      }
    });
  }
  viewContact(contact: Contact) {
  console.log("Viewing contact:", contact);
  // optionally open a MatDialog with full message
}


deleteContact(id: number) {
  console.log("Deleting contact ID:", id);
  // call service.delete(id).subscribe(...)
}

replyContact(email: string) {
  this.dialog.open(ReplydialogComponent, {
    width: '500px',
    data: { email }
  });
}
logout() {
  localStorage.removeItem('authToken'); // clear token
  window.location.href = '/login'; // redirect to home/login
}


}
