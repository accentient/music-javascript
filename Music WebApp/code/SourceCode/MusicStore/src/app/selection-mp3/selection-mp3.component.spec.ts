import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMp3Component } from './selection-mp3.component';

describe('SelectionMp3Component', () => {
  let component: SelectionMp3Component;
  let fixture: ComponentFixture<SelectionMp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionMp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
