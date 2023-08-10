import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormDialogComponent } from './image-form-dialog.component';

describe('ImageFormDialogComponent', () => {
  let component: ImageFormDialogComponent;
  let fixture: ComponentFixture<ImageFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFormDialogComponent]
    });
    fixture = TestBed.createComponent(ImageFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
