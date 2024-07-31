import { Component, Input } from '@angular/core';
import { SimulationService } from '../services/api/simulations/simulation.service';

@Component({
  selector: 'app-population-card',
  templateUrl: './population-card.component.html',
  styleUrl: './population-card.component.scss'
})
export class PopulationCardComponent {

  @Input()
  population: any = {};


  constructor(
    private service: SimulationService
  ){
    
  }

}
