import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestandComponent } from './sale.component';

describe('SalestandComponent', () => {
  let component: SalestandComponent;
  let fixture: ComponentFixture<SalestandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
