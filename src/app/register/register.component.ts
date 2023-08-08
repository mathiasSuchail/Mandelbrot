import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  onSubmit() {

  }
  public registerForm = new FormGroup(
    {
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConfirmation: new FormGroup('')
    }
  )

  constructor() {
  }
}
