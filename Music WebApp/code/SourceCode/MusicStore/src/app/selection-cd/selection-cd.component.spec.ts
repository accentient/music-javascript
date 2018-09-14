import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCdComponent } from './selection-cd.component';

describe('SelectionCdComponent', () => {
  let component: SelectionCdComponent;
  let fixture: ComponentFixture<SelectionCdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionCdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
