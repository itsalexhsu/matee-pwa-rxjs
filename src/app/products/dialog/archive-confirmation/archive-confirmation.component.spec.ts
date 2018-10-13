import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveConfirmationComponent } from './archive-confirmation.component';

describe('ArchiveConfirmationComponent', () => {
  let component: ArchiveConfirmationComponent;
  let fixture: ComponentFixture<ArchiveConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
