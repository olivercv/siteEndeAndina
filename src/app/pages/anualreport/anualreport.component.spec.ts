import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualreportComponent } from './anualreport.component';

describe('AnualreportComponent', () => {
  let component: AnualreportComponent;
  let fixture: ComponentFixture<AnualreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnualreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnualreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
