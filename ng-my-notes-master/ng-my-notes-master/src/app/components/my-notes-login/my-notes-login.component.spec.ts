import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesLoginComponent } from './my-notes-login.component';

describe('MyNotesLoginComponent', () => {
  let component: MyNotesLoginComponent;
  let fixture: ComponentFixture<MyNotesLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
