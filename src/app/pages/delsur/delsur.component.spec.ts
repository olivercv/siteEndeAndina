import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelsurComponent } from './delsur.component';

describe('DelsurComponent', () => {
  let component: DelsurComponent;
  let fixture: ComponentFixture<DelsurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelsurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelsurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
