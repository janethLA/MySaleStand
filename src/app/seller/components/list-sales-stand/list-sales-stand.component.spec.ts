import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesStandComponent } from './list-sales-stand.component';

describe('ListSalesStandComponent', () => {
  let component: ListSalesStandComponent;
  let fixture: ComponentFixture<ListSalesStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalesStandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalesStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
