import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreriosComponent } from './entrerios.component';

describe('EntreriosComponent', () => {
  let component: EntreriosComponent;
  let fixture: ComponentFixture<EntreriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
