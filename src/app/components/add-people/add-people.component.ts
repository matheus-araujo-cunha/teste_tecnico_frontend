import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleFormComponent } from '../people-form/people-form.component';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css'],
})
export class AddPeopleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addPeople(): void {
    const dialogRef = this.dialog.open(PeopleFormComponent, {
      width: '50vw',
      height: '50vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
