import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcptsurComponent } from './ccptsur.component';

describe('CcptsurComponent', () => {
  let component: CcptsurComponent;
  let fixture: ComponentFixture<CcptsurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcptsurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcptsurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
