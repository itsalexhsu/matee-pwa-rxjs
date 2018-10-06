import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourcePhotoComponent } from './edit-resource-photo.component';

describe('EditResourcePhotoComponent', () => {
  let component: EditResourcePhotoComponent;
  let fixture: ComponentFixture<EditResourcePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourcePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourcePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
