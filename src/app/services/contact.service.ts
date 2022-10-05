import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiUrl = 'http://localhost:3000/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getContactsOfPeople(id: string): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(
      `${this.apiUrl}people/contacts/${id}/`
    );
  }

  public addContact(contact: any, peopleId: string): Observable<Contact> {
    return this.httpClient.post<any>(
      `${this.apiUrl}/${peopleId}/contacts`,
      contact,
      this.httpOptions
    );
  }

  public deleteContact(contactId: string): Observable<void> {
    return this.httpClient.delete<any>(
      `${this.apiUrl}people/contacts/${contactId}`
    );
  }
}
