import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SolaresComponent } from "./solares/solares.component";
import { SolarDetailComponent } from "./solar-detail/solar-detail.component";
import { Grafico01Component } from "./grafico01/grafico01.component";

const routes: Routes = [
  { path: "", redirectTo: "/solares", pathMatch: "full" },
  { path: "grafico01", component: Grafico01Component },
  { path: "detail/:id", component: SolarDetailComponent },
  { path: "solares", component: SolaresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
