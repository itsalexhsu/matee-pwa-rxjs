import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail-brewing-guide',
  templateUrl: './product-detail-brewing-guide.component.html',
  styleUrls: ['./product-detail-brewing-guide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailBrewingGuideComponent {

  @Input() product: any

  constructor() { }

  ngOnInit() {
  }

}
