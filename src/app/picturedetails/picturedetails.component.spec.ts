import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { picturedetailsComponent } from './picturedetails.component';

describe('picturedetailsComponent', () => {
  let component: picturedetailsComponent;
  let fixture: ComponentFixture<picturedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ picturedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(picturedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
