import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabItemComponent } from './fab-item.component';

describe('FabItemComponent', () => {
  let component: FabItemComponent;
  let fixture: ComponentFixture<FabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
