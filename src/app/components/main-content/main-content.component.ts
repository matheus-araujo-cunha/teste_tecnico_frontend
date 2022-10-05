import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { IDetail } from 'src/app/models/detail.model';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  detail: IDetail = { open: false };

  contacts: Contact[] = [];
  constructor() {}

  ngOnInit(): void {}
}
