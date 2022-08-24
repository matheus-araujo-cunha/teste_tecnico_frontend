import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addPeople(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: '50vw',
      height: '50vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
