import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesAppComponent } from './my-notes-app.component';

describe('MyNotesAppComponent', () => {
  let component: MyNotesAppComponent;
  let fixture: ComponentFixture<MyNotesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
