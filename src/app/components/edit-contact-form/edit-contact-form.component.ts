import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-contact-form',
  templateUrl: './edit-contact-form.component.html',
  styleUrls: ['./edit-contact-form.component.css'],
})
export class EditContactFormComponent implements OnInit {
  public contactForm!: FormGroup;

  contacts = ['Email', 'Whatsapp', 'Phone'];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditContactFormComponent>
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contact: ['', []],
      info: ['', []],
    });
  }

  closeForm(): void {
    this.dialogRef.close();
  }
}
