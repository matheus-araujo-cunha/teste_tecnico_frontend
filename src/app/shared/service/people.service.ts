import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  apiUrl = 'http://localhost:3000/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getPeoples(): Observable<People> {
    return this.httpClient.get<People>(`${this.apiUrl}people`);
  }

  public postPeople(people: any): Observable<People> {
    return this.httpClient.post<any>(
      `${this.apiUrl}people`,
      people,
      this.httpOptions
    );
  }
}
