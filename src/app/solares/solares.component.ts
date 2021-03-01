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
    console.log("estoy en ngOnInit")
    this.getSolares();
  }

  getSolares(): void {
    this.solarService
      .getSolares()
      .subscribe(solares => {
        this.solares = solares
        console.log(solares)
      });
  }

  add(_id:number,_direccion:{_calle:string,_calle2:string,_numero:number},_localidad:string,_superficie:number,_luz:boolean,_agua:boolean,_f_subida:Date): void {
    _direccion = _direccion;
    if (!_direccion) {
      return;
    }
    this.solarService.addSolar({_id,_direccion:{_calle,_calle2,_numero},_localidad,_superficie,_luz,_agua,_f_subida} as Solar).subscribe(solar => {
      this.solares.push(solar);
    });
  }

  delete(solar: Solar): void {
    this.solares = this.solares.filter(s => s !== solar);
    this.solarService.deleteSolar(solar).subscribe();
  }
}
