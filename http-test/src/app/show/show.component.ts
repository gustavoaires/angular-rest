import { Component } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})

export class ShowComponent {
  people: Person[] = [];

  constructor(private personService: PersonService) {
    this.getPeople();
  }

  edit(person: Person) {
    person.name = person.name + ' X';
    this.personService.updatePerson(person)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    location.reload();
  }

  getPeople() {
    this.personService.getPeople()
      .subscribe(
        data => this.people = data,
        error => console.log(error)
      );
  }

  remove(person: Person) {
    this.personService.deletePerson(person)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
