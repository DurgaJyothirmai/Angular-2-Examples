import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model2Component } from './model2.component';

describe('Model2Component', () => {
  let component: Model2Component;
  let fixture: ComponentFixture<Model2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
