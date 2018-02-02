import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route7Component } from './route7.component';

describe('Route7Component', () => {
  let component: Route7Component;
  let fixture: ComponentFixture<Route7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
