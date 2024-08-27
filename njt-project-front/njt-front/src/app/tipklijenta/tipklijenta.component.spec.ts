import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipklijentaComponent } from './tipklijenta.component';

describe('TipklijentaComponent', () => {
  let component: TipklijentaComponent;
  let fixture: ComponentFixture<TipklijentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipklijentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipklijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
