import { Component } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Person } from '../model/person.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  name: string;
  email: string;

  constructor(private personService: PersonService) {}

  register() {
    console.log('POST');
    let person = new Person();
    person.name = this.name;
    person.email = this.email;
    this.personService.addPerson(person)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }
}
