import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageForm } from '../../models/resource.model';

import { FormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-image-form',
  templateUrl: './edit-image-form.component.html',
  styleUrls: ['./edit-image-form.component.scss']
})
export class EditImageFormComponent {

  @Input() locations: any[]
  @Output() submitted = new EventEmitter<ImageForm>()
  @Output() selectedLocation = new EventEmitter<object>()
  @Output() show = new EventEmitter<boolean>()

  form: FormGroup = new FormGroup ({
    caption: new FormControl(''),
    locationName: new FormControl('')
  })

  constructor() { }

}