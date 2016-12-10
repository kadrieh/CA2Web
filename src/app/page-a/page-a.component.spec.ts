/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageAComponent } from './page-a.component';

describe('PageAComponent', () => {
  let component: PageAComponent;
  let fixture: ComponentFixture<PageAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
