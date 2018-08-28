/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Flip1Component } from './flip1.component';

describe('Flip1Component', () => {
  let component: Flip1Component;
  let fixture: ComponentFixture<Flip1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Flip1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flip1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
