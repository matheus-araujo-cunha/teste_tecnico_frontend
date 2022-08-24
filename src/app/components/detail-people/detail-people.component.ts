import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { EditContactFormComponent } from '../edit-contact-form/edit-contact-form.component';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.css'],
})
export class DetailPeopleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addContact(): void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '50vw',
      height: '50vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  editContact(): void {
    const dialogRef = this.dialog.open(EditContactFormComponent, {
      width: '50vw',
      height: '50vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
