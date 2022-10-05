import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { IDetail } from 'src/app/models/detail.model';
import { People } from 'src/app/models/people.model';
import { ContactService } from 'src/app/services/contact.service';
import { PeopleService } from 'src/app/services/people.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { EditContactFormComponent } from '../edit-contact-form/edit-contact-form.component';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.css'],
})
export class DetailPeopleComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private contactService: ContactService,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {}

  @Input() peopleDetail!: IDetail;

  addContact(): void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '50vw',
      height: '50vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  deletePeople(): void {
    this.peopleService
      .deletePeople(this.peopleDetail.id as string)
      .subscribe((_) => {
        window.location.reload();
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

  deleteContact(contactId: string): void {
    this.contactService
      .deleteContact(contactId)
      .subscribe((_) => window.location.reload());
  }
}
