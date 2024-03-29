import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent {
  
  @Input() icon: string
  @Input() routerlink: string | any[] = '/'
  @Output() navigate = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
