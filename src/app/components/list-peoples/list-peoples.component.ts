import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/shared/models/people.model';
import { PeopleService } from 'src/app/shared/service/people.service';

@Component({
  selector: 'app-list-peoples',
  templateUrl: './list-peoples.component.html',
  styleUrls: ['./list-peoples.component.css'],
})
export class ListPeoplesComponent implements OnInit {
  peoples!: People[];

  constructor(public peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples() {
    this.peopleService.getPeoples().subscribe((data) => {
      this.peoples = data;
      console.log(this.peoples[0]);
    });
  }
}
