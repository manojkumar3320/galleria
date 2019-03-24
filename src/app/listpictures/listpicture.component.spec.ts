import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpictureComponent } from './listpicture.component';

describe('ListpictureComponent', () => {
  let component: ListpictureComponent;
  let fixture: ComponentFixture<ListpictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
