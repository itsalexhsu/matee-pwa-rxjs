import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fab-item',
  templateUrl: './fab-item.component.html',
  styleUrls: ['./fab-item.component.scss']
})
export class FabItemComponent {

  @Input() show: boolean
  @Input() hideBadge: boolean
  @Input() routerlink: string
  @Input() badgeCount: number
  @Input() icon: string

  @Output() clicked = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.clicked.emit(event)
  }

}
