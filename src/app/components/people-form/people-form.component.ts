import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit {
  public peopleForm!: FormGroup;
  peoples!: People[];

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleService,
    public dialogRef: MatDialogRef<PeopleFormComponent>
  ) {}

  ngOnInit(): void {
    this.peopleForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  registerPeople() {
    this.peopleService
      .postPeople(this.peopleForm.value)
      .subscribe((result) => {});

    window.location.reload();

    this.closeForm();
  }

  closeForm(): void {
    this.dialogRef.close();
    this.peopleForm.reset();
  }
}
