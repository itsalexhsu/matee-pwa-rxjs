import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBlendsComponent } from './favorite-blends.component';

describe('FavoriteBlendsComponent', () => {
  let component: FavoriteBlendsComponent;
  let fixture: ComponentFixture<FavoriteBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
