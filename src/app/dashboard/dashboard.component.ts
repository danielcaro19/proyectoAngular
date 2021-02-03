import { Component, OnInit } from "@angular/core";
import { Solar } from "../solar";
import { SolarService } from "../solar.service";
import { SolarSearchComponent } from "../solar-search/solar-search.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  solares: Solar[] = [];

  constructor(private solarService: SolarService) {}

  ngOnInit() {
    this.getSolares();
  }

  getSolares(): void {
    this.solarService
      .getSolares()
      .subscribe(solares => (this.solares = solares.slice(1, 5)));
  }
}
