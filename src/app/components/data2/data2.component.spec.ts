import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Data2Component } from './data2.component';

describe('Data2Component', () => {
  let component: Data2Component;
  let fixture: ComponentFixture<Data2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Data2Component]
    });
    fixture = TestBed.createComponent(Data2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
