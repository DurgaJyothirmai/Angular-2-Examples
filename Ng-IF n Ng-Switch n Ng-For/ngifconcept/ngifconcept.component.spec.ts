import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifconceptComponent } from './ngifconcept.component';

describe('NgifconceptComponent', () => {
  let component: NgifconceptComponent;
  let fixture: ComponentFixture<NgifconceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifconceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
