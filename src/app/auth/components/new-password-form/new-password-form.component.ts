import { Component, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NewPasswordForm } from '../../models/auth.model';
import { MatchValidator } from "../../../shared/utils";

@Component({
  selector: 'app-new-password-form',
  templateUrl: './new-password-form.component.html',
  styleUrls: ['./new-password-form.component.scss']
})
export class NewPasswordFormComponent {

  @Output() submitted = new EventEmitter<NewPasswordForm>()

  form: FormGroup = new FormGroup ({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  },{validators: MatchValidator})

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value.password)
    }
  }
  

  constructor() { }

}