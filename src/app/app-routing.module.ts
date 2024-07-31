import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SimulationDetailsComponent } from './simulation-details/simulation-details.component';

const routes: Routes = [
  {
    path: "create",
    component: SimulationFormComponent
  },
  {
    path: "simulations",
    component: DataTableComponent
  },
  {
    path: "details",
    component: SimulationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
