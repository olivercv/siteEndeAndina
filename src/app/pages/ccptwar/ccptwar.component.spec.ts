import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcptwarComponent } from './ccptwar.component';

describe('CcptwarComponent', () => {
  let component: CcptwarComponent;
  let fixture: ComponentFixture<CcptwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcptwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcptwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
