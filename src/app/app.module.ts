import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddPeopleComponent } from './components/add-people/add-people.component';
import { ListPeoplesComponent } from './components/list-peoples/list-peoples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DetailPeopleComponent } from './components/detail-people/detail-people.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MatSelectModule } from '@angular/material/select';
import { EditContactFormComponent } from './components/edit-contact-form/edit-contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddButtonComponent,
    AddPeopleComponent,
    ListPeoplesComponent,
    PeopleFormComponent,
    DetailPeopleComponent,
    MainContentComponent,
    ContactFormComponent,
    EditContactFormComponent,
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
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
