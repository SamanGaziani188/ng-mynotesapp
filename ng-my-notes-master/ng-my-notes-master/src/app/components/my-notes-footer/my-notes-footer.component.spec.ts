import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesFooterComponent } from './my-notes-footer.component';

describe('MyNotesFooterComponent', () => {
  let component: MyNotesFooterComponent;
  let fixture: ComponentFixture<MyNotesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNotesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
