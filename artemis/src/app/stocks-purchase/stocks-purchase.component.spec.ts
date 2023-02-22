import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksPurchaseComponent } from './stocks-purchase.component';

describe('StocksPurchaseComponent', () => {
  let component: StocksPurchaseComponent;
  let fixture: ComponentFixture<StocksPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
