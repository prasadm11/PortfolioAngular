import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmailService, EmailRequest } from '../../../Services/email/email.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
// Angular Material

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-replydialog',
  imports: [
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './replydialog.component.html',
  styleUrl: './replydialog.component.css'
})
export class ReplydialogComponent {
  subject = '';
  body = '';

  constructor(
    public dialogRef: MatDialogRef<ReplydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string },
    private emailService: EmailService
  ) {}

  sendEmail() {
    const emailData: EmailRequest = {
      to: this.data.email,
      subject: this.subject,
      body: this.body
    };

    this.emailService.sendEmail(emailData).subscribe({
      next: () => {
        alert('Email sent successfully!');
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Error sending email', err);
        alert('Failed to send email.');
      }
    });
  }

  close() {
    this.dialogRef.close(false);
  }

}
