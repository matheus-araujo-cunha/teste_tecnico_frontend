import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { Store } from '@ngrx/store';

import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { IDetail } from 'src/app/models/detail.model';

@Component({
  selector: 'app-list-peoples',
  templateUrl: './list-peoples.component.html',
  styleUrls: ['./list-peoples.component.css'],
})
export class ListPeoplesComponent implements OnInit {
  peoples!: People[];

  constructor(
    public peopleService: PeopleService,
    private contactService: ContactService
  ) {}

  @Input() peopleDetail!: IDetail;

  @Input() contactsOfPeople!: Contact[];

  ngOnInit(): void {
    this.getPeoples();
  }

  getUniquePeople(people: Partial<People>) {
    this.peopleDetail.open = !this.peopleDetail.open;
    this.peopleDetail.contacts = people.contacts;
    this.peopleDetail.firstName = people.firstName;
    this.peopleDetail.lastName = people.lastName;
    this.peopleDetail.id = people.id;
  }

  getPeoples() {
    this.peopleService.getPeoples().subscribe((data) => (this.peoples = data));
  }
}
