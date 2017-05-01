import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Person } from '../model/person.model';

@Injectable()
export class PersonService {
  private people: Person[] = [];
  static URL: string =
    'http://rest.learncode.academy/api/outro/person/';

  constructor(private http: Http) {}

  addPerson(person: Person) {
    console.log(`ADDSERVICE`)
    return this.http
      .post(PersonService.URL, person)
        .map((response: Response) => {
          this.people.push(response.json());
        })
        .catch((error: Response) => Observable.throw(error));
  }

  getPeople() {
    console.log('GETSERVICE')
    return this.http
      .get(PersonService.URL)
        .map((response: Response) => {
          this.people = response.json();
          return this.people;
        })
        .catch((error: Response) => Observable.throw(error));
  }

  updatePerson(person: Person) {
    console.log('UPDATESERVICE')
    return this.http
      .put(`${PersonService.URL}${person.id}`, person)
        .map((response: Response) => console.log(response.json()))
        .catch((error: Response) => Observable.throw(error));
  }
}
