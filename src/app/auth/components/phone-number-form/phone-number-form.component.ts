import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { phoneNumberForm } from '../../models/auth.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-number-form',
  templateUrl: './phone-number-form.component.html',
  styleUrls: ['./phone-number-form.component.scss']
})
export class PhoneNumberFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<phoneNumberForm>()

  form: FormGroup = new FormGroup ({
    countryCode: new FormControl('+1'),
    phoneNumber: new FormControl('', [Validators.required]),
  })

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
