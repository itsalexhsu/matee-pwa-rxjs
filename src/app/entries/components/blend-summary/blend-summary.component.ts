import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blend-summary',
  templateUrl: './blend-summary.component.html',
  styleUrls: ['./blend-summary.component.scss']
})
export class BlendSummaryComponent {

  @Input() blend: any
  @Input() showCreateDate: boolean

  constructor() { }

  ngOnInit() {
  }

}
