import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestandsComponent } from './salestands.component';

describe('SalestandsComponent', () => {
  let component: SalestandsComponent;
  let fixture: ComponentFixture<SalestandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalestandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalestandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
