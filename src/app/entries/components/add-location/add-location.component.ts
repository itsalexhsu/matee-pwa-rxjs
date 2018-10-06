import { Component, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent {

  debouncer: Subject<string> = new Subject()

  @Input() locations: any[]
  @Output() close = new EventEmitter<boolean>()
  @Output() selectedLocation = new EventEmitter<object>()
  @Output() searchKeyword = new EventEmitter<string>()
  @ViewChild('input') input: ElementRef

  constructor() {
    this.debouncer
    .pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(keyword => this.searchKeyword.emit(keyword))
  }

  ngAfterViewChecked() {
    this.input.nativeElement.focus()
  }

}
