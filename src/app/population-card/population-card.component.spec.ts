import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationCardComponent } from './population-card.component';

describe('PopulationCardComponent', () => {
  let component: PopulationCardComponent;
  let fixture: ComponentFixture<PopulationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopulationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
