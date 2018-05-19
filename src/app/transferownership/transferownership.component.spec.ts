import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferownershipComponent } from './transferownership.component';

describe('TransferownershipComponent', () => {
  let component: TransferownershipComponent;
  let fixture: ComponentFixture<TransferownershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferownershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferownershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
