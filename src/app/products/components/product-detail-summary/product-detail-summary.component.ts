import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail-summary',
  templateUrl: './product-detail-summary.component.html',
  styleUrls: ['./product-detail-summary.component.scss']
})
export class ProductDetailSummaryComponent {

  @Input() product: any
  @Input() showCreateDate: boolean

  constructor() { }

  ngOnInit() {
  }

}