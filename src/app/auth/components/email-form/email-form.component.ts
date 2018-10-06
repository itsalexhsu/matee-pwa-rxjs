import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { phoneNumberForm } from '../../models/auth.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {

  @Output() submitted = new EventEmitter<any>()

  form: FormGroup = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value)
    }
  }

  constructor() { }

}
