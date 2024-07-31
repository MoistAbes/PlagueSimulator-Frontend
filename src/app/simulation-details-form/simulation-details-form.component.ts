import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SimulationRepresentation } from '../services/api/models/simulation-representation';
import { SimulationService } from '../services/api/simulations/simulation.service';
import { PopulationService } from '../services/api/simulations/population.service';

@Component({
  selector: 'app-simulation-details-form',
  templateUrl: './simulation-details-form.component.html',
  styleUrl: './simulation-details-form.component.scss'
})
export class SimulationDetailsFormComponent implements OnInit {
updatePopulationCards() {
  throw new Error('Method not implemented.');
}
 
  @Output() onSimulationCreated = new EventEmitter<SimulationRepresentation>();
  formTitle: string = "SIMULATION DETAILS";

  simulationId: number = 0;
  name: string = "test";
  populationSize: number = 0;
  infected: number = 0;
  spreadRatio: number = 0;
  deathRatio: number = 0;
  recoveryTime: number = 0;
  deathTime: number = 0;
  simulationTime: number = 0;

  isEditable: boolean = true;
  isSaveButtonHidden = true;

  simulation: any;

   constructor(
    private service: SimulationService,
    private populationService: PopulationService
  ){
    this.simulationId = service.simulationId;
    ;
  }
  ngOnInit(): void {
    console.log("simulation id: " + this.simulationId);

    this.service.getSimulation(this.simulationId).subscribe({
      next: (data: SimulationRepresentation) => {
        this.name = data.name;
        this.populationSize = data.populationSize;
        this.infected = data.startingPopulationSize;
        this.spreadRatio = data.spreadRatio;
        this.deathRatio = data.deathRatio;
        this.recoveryTime = data.recoveryTime;
        this.deathTime = data.deathTime;
        this.simulationTime = data.simulationTime;
      }
    })    
  }

   updateTitle(newTitle: string): void {
    this.formTitle = newTitle;
  }

  saveSimulation() {
    console.log("is this even happening");
  }

  showSaveButton() {
  this.isSaveButtonHidden = !this.isSaveButtonHidden;
}

  onSubmit() {

    console.log("input name: " + this.name);
    console.log("updated id: " + this.simulationId);
    let updatedSimulation: SimulationRepresentation = {
      "id": this.simulationId,
      "name": this.name,
      "populationSize": this.populationSize,
      "startingPopulationSize": this.infected,
      "spreadRatio": this.spreadRatio,
      "deathRatio": this.deathRatio,
      "deathTime": this.deathTime,
      "recoveryTime": this.recoveryTime,
      "simulationTime": this.simulationTime,
      "populationIdList": [],
    }
    this.service.addSimulation(updatedSimulation);
    this.populationService.calculatePopulations2(this.simulationId);
  }

  switchEditable() {
  this.isEditable = !this.isEditable
}
}
