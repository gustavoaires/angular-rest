import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Person } from '../model/person.model';

@Injectable()
export class PersonService {
  private people: Person[] = [];
  static URL: string =
    'http://localhost:3000/people/';

  constructor(private http: Http) {}

  addPerson(person: Person) {
    return this.http
      .post(PersonService.URL, person)
        .map((response: Response) => {
          this.people.push(response.json());
          return response.json();
        })
        .catch((error: Response) => {
          return Observable.throw(error);
        });
  }

  getPeople() {
    return this.http
      .get(PersonService.URL)
        .map((response: Response) => {
          this.people = response.json();
          return this.people;
        })
        .catch((error: Response) => Observable.throw(error));
  }

  updatePerson(person: Person) {
    return this.http
      .put(`${PersonService.URL}${person.id}`, person)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error));
  }

  deletePerson(person: Person) {
    return this.http
      .delete(`${PersonService.URL}${person.id}`)
        .map((response: Response) => {
          this.people.splice(this.people.indexOf(person), 1);
          return response.json();
        })
        .catch((error: Response) => Observable.throw(error));
  }
}
