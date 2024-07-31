import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SimulationService } from '../services/api/simulations/simulation.service';
import { SimulationRepresentation } from '../services/api/models/simulation-representation';
import { PopulationRepresentation } from '../services/api/models/population-representation';
import { PopulationService } from '../services/api/simulations/population.service';

@Component({
  selector: 'app-simulation-details',
  templateUrl: './simulation-details.component.html',
  styleUrl: './simulation-details.component.scss'
})
export class SimulationDetailsComponent implements OnInit {


  populations: PopulationRepresentation[] = [];
  simulationId: number = 0;

  constructor(
    private populationService: PopulationService,
    private simulationService: SimulationService
  ){
    this.simulationId = simulationService.simulationId;
  }
  ngOnInit(): void {

    this.populationService.generatePopulation(this.simulationId);
    this.populationService.calculatePopulations2(this.simulationId).subscribe({
      next: (data: PopulationRepresentation[]) => {
        this.populations = data;
      }
    })

    console.log("POPULATIONS: " + this.populations);
  }

  generateFirstPopulation() {
    this.populationService.generatePopulation(this.simulationId);
  }


  





}
