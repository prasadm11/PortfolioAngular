import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private dialogRef: MatDialogRef<ContactdialogComponent>
  ) {
    this.contactForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message sent successfully!');
      this.dialogRef.close();
    }
  }

  close() {
    this.dialogRef.close();
  }
}
