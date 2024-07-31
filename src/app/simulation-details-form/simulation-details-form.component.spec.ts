import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationDetailsFormComponent } from './simulation-details-form.component';

describe('SimulationDetailsFormComponent', () => {
  let component: SimulationDetailsFormComponent;
  let fixture: ComponentFixture<SimulationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulationDetailsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
