import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsocialComponent } from './gestionsocial.component';

describe('GestionsocialComponent', () => {
  let component: GestionsocialComponent;
  let fixture: ComponentFixture<GestionsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
