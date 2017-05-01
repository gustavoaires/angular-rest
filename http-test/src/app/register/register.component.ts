import { Component } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  person: Person;

  constructor(private personService: PersonService) {
    this.person = new Person();
  }

  register() {
    console.log('POST')
    this.personService.addPerson(this.person);
  }
}
