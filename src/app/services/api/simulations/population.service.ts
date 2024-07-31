import { Injectable } from '@angular/core';
import { PopulationRepresentation } from '../models/population-representation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  private baseUrl: string = "http://localhost:8080/population";

  populations: PopulationRepresentation[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllPopulationsWithSimulationId(simulationId: number): void {
    const url = `${this.baseUrl}/all/${simulationId}`
    this.http.get<PopulationRepresentation[]>(url)
    .subscribe({
      next: (data: PopulationRepresentation[]): void => {
        data.forEach((population => {
          this.populations.push(population);
        }))
      }
    })
  }

  calculatePopulations2(simulationId: number): Observable<PopulationRepresentation[]> {
    const url = `http://localhost:8080/simulation/start/${simulationId}`
    return this.http.get<PopulationRepresentation[]>(url);
  }

  generatePopulation(simulationId: number): void {
    const url = `${this.baseUrl}/generate/${simulationId}`
    this.http.get<PopulationRepresentation>(url)
    .subscribe({
      next: (data: PopulationRepresentation): void => {
        console.log("generated population: " + data);
      }
    })
  }
}
