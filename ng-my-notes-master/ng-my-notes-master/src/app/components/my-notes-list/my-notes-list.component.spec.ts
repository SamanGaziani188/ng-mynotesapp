import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesListComponent } from './my-notes-list.component';

describe('MyNotesListComponent', () => {
  let component: MyNotesListComponent;
  let fixture: ComponentFixture<MyNotesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
