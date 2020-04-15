import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesHeaderComponent } from './my-notes-header.component';

describe('MyNotesHeaderComponent', () => {
  let component: MyNotesHeaderComponent;
  let fixture: ComponentFixture<MyNotesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
