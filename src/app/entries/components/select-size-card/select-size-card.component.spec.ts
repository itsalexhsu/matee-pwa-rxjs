import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSizeCardComponent } from './select-size-card.component';

describe('SelectSizeCardComponent', () => {
  let component: SelectSizeCardComponent;
  let fixture: ComponentFixture<SelectSizeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSizeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
