import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SimulationService } from '../services/api/simulations/simulation.service';
import { SimulationRepresentation } from '../services/api/models/simulation-representation';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrl: './simulation-form.component.scss'
})
export class SimulationFormComponent implements OnInit {
 
  constructor(
    private service: SimulationService
  ){
  
  }
  ngOnInit(): void {
    this.formTitle;
  }

  @Output() onSimulationCreated = new EventEmitter<SimulationRepresentation>();


  formTitle: string = "NEW SIMULATION FORM";

  name: string = "";
  populationSize: number = 0;
  infected: number = 0;
  spreadRatio: number = 0;
  deathRatio: number = 0;
  recoveryTime: number = 0;
  deathTime: number = 0;
  simulationTime: number = 0;
  
   updateTitle(newTitle: string): void {
    this.formTitle = newTitle;
  }


  onSubmit() {

    let simulation: SimulationRepresentation;
    simulation = {
      "name": this.name,
      "populationSize": this.populationSize,
      "startingPopulationSize": this.infected,
      "spreadRatio": this.spreadRatio,
      "deathRatio": this.deathRatio,
      "recoveryTime": this.recoveryTime,
      "deathTime": this.deathTime,
      "simulationTime": this.simulationTime,
      "populationIdList": []
    }

    this.service.addSimulation(simulation)
    this.service.getAllSimulations();
    this.onSimulationCreated.emit(simulation);
    
    console.log(simulation);
  }
}
