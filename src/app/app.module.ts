import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SimulationFormComponent } from './simulation-form/simulation-form.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { SimulationDetailsComponent } from './simulation-details/simulation-details.component';
import { SimulationDetailsFormComponent } from './simulation-details-form/simulation-details-form.component';
import { PopulationCardComponent } from './population-card/population-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SimulationFormComponent,
    DataTableComponent,
    SimulationDetailsComponent,
    SimulationDetailsFormComponent,
    PopulationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
