import { Component, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResetPasswordForm } from '../../models/auth.model';
import { MatchValidator } from "../../../shared/utils";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {

  @Output() submitted = new EventEmitter<ResetPasswordForm>()

  form: FormGroup = new FormGroup ({
    verificationCode: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  },{validators: MatchValidator})

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value)
    }
  }
  

  constructor() { }

}