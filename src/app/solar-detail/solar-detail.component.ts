import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Solar } from "../solar";
import { SolarService } from "../solar.service";

@Component({
  selector: "app-solar-detail",
  templateUrl: "./solar-detail.component.html",
  styleUrls: ["./solar-detail.component.css"]
})
export class SolarDetailComponent implements OnInit {
  solar: Solar;

  constructor(
    private route: ActivatedRoute,
    private solarService: SolarService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSolar();
  }

  getSolar(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.solarService.getSolar(id).subscribe(solar => (this.solar = solar));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.solarService.updateSolar(this.solar).subscribe(() => this.goBack());
  }
}
