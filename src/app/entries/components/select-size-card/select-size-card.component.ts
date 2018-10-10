import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-size-card',
  templateUrl: './select-size-card.component.html',
  styleUrls: ['./select-size-card.component.scss']
})
export class SelectSizeCardComponent {

  @Input() blend: any
  @Output() selected = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
