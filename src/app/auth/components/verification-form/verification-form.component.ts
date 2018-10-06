import { Component, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { VerificationForm } from "../../models/auth.model";

@Component({
  selector: 'app-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.scss']
})
export class VerificationFormComponent {

  @Output() submitted = new EventEmitter<VerificationForm>()

  form: FormGroup = new FormGroup ({
    verificationCode: new FormControl('', [Validators.required])
  })

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value)
    }
  }

  constructor() { }

}
