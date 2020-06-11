import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestrategicoComponent } from './pestrategico.component';

describe('PestrategicoComponent', () => {
  let component: PestrategicoComponent;
  let fixture: ComponentFixture<PestrategicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestrategicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestrategicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
