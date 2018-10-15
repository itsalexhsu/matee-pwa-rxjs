import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail-summary',
  templateUrl: './product-detail-summary.component.html',
  styleUrls: ['./product-detail-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailSummaryComponent {

  @Input() product: any
  @Input() showCreateDate: boolean

  constructor() { }

  ngOnInit() {
  }

}