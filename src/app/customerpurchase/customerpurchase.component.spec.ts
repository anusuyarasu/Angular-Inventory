import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpurchaseComponent } from './customerpurchase.component';

describe('CustomerpurchaseComponent', () => {
  let component: CustomerpurchaseComponent;
  let fixture: ComponentFixture<CustomerpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
