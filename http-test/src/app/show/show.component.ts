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

  edit() {

  }

  getPeople() {
    console.log('GET')
    this.personService.getPeople()
      .subscribe(
        data => this.people = data,
        error => console.log(error)
      );
  }
}
