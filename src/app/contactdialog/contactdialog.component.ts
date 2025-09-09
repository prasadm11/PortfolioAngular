import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../Services/contact/contact.service';

@Component({
  selector: 'app-contactdialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactdialog.component.html',
  styleUrls: ['./contactdialog.component.css']
})
export class ContactdialogComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactdialogComponent>,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      id: [''],
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
  console.log('Form submitted:', this.contactForm.value); // 👀 debug
  if (this.contactForm.valid) {
    this.contactService.create(this.contactForm.value).subscribe({
      next: () => {
        alert('Message Sent Sucessfully');
        this.dialogRef.close();
      },
      error: (err) => {
        console.error(err);
        alert('Something went wrong, please try again.');
      }
    });
  }
}


  close() {
    this.dialogRef.close();
  }
}
