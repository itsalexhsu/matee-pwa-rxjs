import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBlendsComponent } from './featured-blends.component';

describe('FeaturedBlendsComponent', () => {
  let component: FeaturedBlendsComponent;
  let fixture: ComponentFixture<FeaturedBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
