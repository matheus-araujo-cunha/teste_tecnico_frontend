import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactService } from 'src/app/services/contact.service';

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
    public dialogRef: MatDialogRef<ContactFormComponent>,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contact: ['', [Validators.required]],
      info: ['', [Validators.required]],
    });
  }

  addContact() {
    // this.contactService.addContact(this.contactForm.value, );
  }

  closeForm(): void {
    this.dialogRef.close();
  }
}
