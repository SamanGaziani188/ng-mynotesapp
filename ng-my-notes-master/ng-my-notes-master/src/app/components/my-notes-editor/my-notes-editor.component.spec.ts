import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesEditorComponent } from './my-notes-editor.component';

describe('MyNotesEditorComponent', () => {
  let component: MyNotesEditorComponent;
  let fixture: ComponentFixture<MyNotesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
