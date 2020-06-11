import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnesComponent } from './warnes.component';

describe('WarnesComponent', () => {
  let component: WarnesComponent;
  let fixture: ComponentFixture<WarnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
