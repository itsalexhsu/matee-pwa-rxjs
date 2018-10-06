import { Component, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.scss']
})
export class NameFormComponent {

  @Output() submitted = new EventEmitter<string>()

  form: FormGroup = new FormGroup ({
    name: new FormControl('', [Validators.required])
  })

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value)
    }
  }

  constructor() { }

}
