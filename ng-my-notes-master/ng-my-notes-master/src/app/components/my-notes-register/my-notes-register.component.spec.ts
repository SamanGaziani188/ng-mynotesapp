import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesRegisterComponent } from './my-notes-register.component';

describe('MyNotesRegisterComponent', () => {
  let component: MyNotesRegisterComponent;
  let fixture: ComponentFixture<MyNotesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
