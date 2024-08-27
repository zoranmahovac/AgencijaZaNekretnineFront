import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentAddComponent } from './klijent-add.component';

describe('KlijentAddComponent', () => {
  let component: KlijentAddComponent;
  let fixture: ComponentFixture<KlijentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KlijentAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlijentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
