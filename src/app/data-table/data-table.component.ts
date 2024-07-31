import { Component, OnInit } from '@angular/core';
import { SimulationRepresentation } from '../services/api/models/simulation-representation';
import { SimulationService } from '../services/api/simulations/simulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {

 constructor(
    private service: SimulationService,
    private router: Router
  ){
    this.updateData();
  }

  doSomething(simulation: SimulationRepresentation) {
    console.log("created simulation: " + simulation);
    this.updateData();
    this.visibleData();
  }

  simulations: Array<SimulationRepresentation> = [];
  currentPage: number = 1;
  pageSize: number = 5;
  filteredSimulations: Array<SimulationRepresentation> = this.simulations;
  pageSizes: Array<number> = [5, 10, 20];
  visible:boolean = false; 

   showhideUtility(){ 
       this.visible = this.visible?false:true; 
   } 
  
 
  updateData(){
    this.service.getAllSimulations();
    this.simulations = this.service.simulations;
    this.filteredSimulations = this.simulations;
  }

  ngOnInit(): void {
    console.log("On init sie dzieje");
    this.visibleData();
  }

 
  visibleData(){
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSimulations.slice(startIndex, endIndex);
  }

  nextPage(){
    this.currentPage += 1;
    this.visibleData();
  }
  previousPage(){
    this.currentPage -= 1;
    this.visibleData();
  }

  pageNumbers(){
    let totalPages = Math.ceil(this.filteredSimulations.length / this.pageSize); 
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.visibleData(); 
  }

  filterData(filter: string) {
    this.filteredSimulations = this.simulations.filter(simulation => simulation.name.toLowerCase().includes(filter.toLowerCase()));
  }

  changePageSize(pageSize: any) {
    this.pageSize = pageSize;
    this.visibleData();
  }

  clickItem(item: any) {
    console.log("Item clicked id: " + item.id);
    this.service.simulationId = item.id;
    this.router.navigate(["/" ,"details"])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

  deleteItem(event: Event, simulation: any, index: number) {
  event.stopPropagation(); // Prevents the row click event from firing
  console.log("Delete button clicked for supplier: " + simulation.id);
    this.filteredSimulations.splice(index, 1);
    this.service.deleteSimulation(simulation.id);
  }

  handleSomeEvent($event: Event) {
    console.log("some event: " + $event);
  }

}
