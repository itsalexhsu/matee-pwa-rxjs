import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlendsComponent } from './create-blends.component';

describe('CreateBlendsComponent', () => {
  let component: CreateBlendsComponent;
  let fixture: ComponentFixture<CreateBlendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBlendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
