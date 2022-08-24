import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CardPeopleComponent } from './components/card-people/card-people.component';
import { AddPeopleComponent } from './components/add-people/add-people.component';
import { ListPeoplesComponent } from './components/list-peoples/list-peoples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AddContactComponent } from './components/add-contact/add-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddButtonComponent,
    CardPeopleComponent,
    AddPeopleComponent,
    ListPeoplesComponent,
    PeopleFormComponent,
    AddContactComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
