import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimulationRepresentation } from '../models/simulation-representation';
import { response } from 'express';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private baseUrl: string = "http://localhost:8080/simulation";

  simulations: SimulationRepresentation[] = [];
  simulationId: number = 0;
  simulation: SimulationRepresentation = {
    "id": 0,
    "name": "",
    "populationSize": 0,
    "startingPopulationSize": 0,
    "spreadRatio": 0,
    "deathRatio": 0,
    "deathTime": 0,
    "recoveryTime": 0,
    "simulationTime": 0,
    "populationIdList": []
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllSimulations(): void {
    this.http.get<SimulationRepresentation[]>(this.baseUrl)
    .subscribe({
      next: (data: SimulationRepresentation[]): void => {
        data.forEach((simulation => {
          this.simulations = data;
        }))
      }
    });
  }

  getSimulation(id: number): Observable<SimulationRepresentation> {
    const url: string = `${this.baseUrl}/${id}` 
    return this.http.get<SimulationRepresentation>(url)
  }

  deleteSimulation(id: number): void {
    console.log("deleting simulation with id: " + id);
    const url: string = `${this.baseUrl}/${id}`;
    this.http.delete(url)
    .subscribe((response) => {
      console.log(response);
    });
    
  }


  addSimulation(simulation: SimulationRepresentation): void {
    console.log("Adding simulation: " + simulation);
     this.http.post<SimulationRepresentation>(this.baseUrl, simulation)
    .subscribe(data => {
      console.log("Added simulation: " + data.name);
    })
  }
}

