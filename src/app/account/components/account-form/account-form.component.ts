import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { FindUserAttributeValue } from '../../../shared/utils';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent {

  @Input() user: CognitoUserAttribute[]

  form: FormGroup = new FormGroup ({
    name: new FormControl({value: '', disabled: true}),
    email: new FormControl({value: '', disabled: true}),
    userId: new FormControl({value: '', disabled: true}),
  })

  get name() {
    return FindUserAttributeValue('name', this.user)
  }

  get email() {
    return FindUserAttributeValue('email', this.user)
  }

  get userId() {
    return FindUserAttributeValue('sub', this.user)
  }

  ngOnChanges() {
    this.form.controls['name'].setValue(this.name)
    this.form.controls['email'].setValue(this.email)
    this.form.controls['userId'].setValue(this.userId)
  }

  constructor() { }

}
