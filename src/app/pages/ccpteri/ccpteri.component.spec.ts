import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcpteriComponent } from './ccpteri.component';

describe('CcpteriComponent', () => {
  let component: CcpteriComponent;
  let fixture: ComponentFixture<CcpteriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcpteriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcpteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
