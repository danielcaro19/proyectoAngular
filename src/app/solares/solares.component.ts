import { Component, OnInit } from "@angular/core";
import { Solar } from "../solar";
import { SolarService } from "../solar.service";

@Component({
  selector: "app-solares",
  templateUrl: "./solares.component.html",
  styleUrls: ["./solares.component.css"]
})
export class SolaresComponent implements OnInit {
  solares: Solar[];

  constructor(private solarService: SolarService) {}

  ngOnInit() {
    this.getSolares();
  }

  getSolares(): void {
    this.solarService
      .getSolares()
      .subscribe(solares => (this.solares = solares));
  }

  add(direccion: string): void {
    direccion = direccion.trim();
    if (!direccion) {
      return;
    }
    this.solarService.addSolar({ direccion } as Solar).subscribe(solar => {
      this.solares.push(solar);
    });
  }

  delete(solar: Solar): void {
    this.solares = this.solares.filter(s => s !== solar);
    this.solarService.deleteSolar(solar).subscribe();
  }
}
