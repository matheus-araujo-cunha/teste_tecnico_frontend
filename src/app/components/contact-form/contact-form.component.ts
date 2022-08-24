import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  public contactForm!: FormGroup;

  contacts = ['Email', 'Whatsapp', 'Phone'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ContactFormComponent>
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contact: ['', [Validators.required]],
      info: ['', [Validators.required]],
    });
  }

  closeForm(): void {
    this.dialogRef.close();
  }
}
