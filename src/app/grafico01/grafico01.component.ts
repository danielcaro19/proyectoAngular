import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { SolarService } from "../solar.service";
import { Solar } from "../solar";


@Component({
  selector: "app-grafico01",
  templateUrl: "./grafico01.component.html",
  styleUrls: ["./grafico01.component.css"]
})
export class Grafico01Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Superficie de los solares por ciudad'
        },
        xAxis: {
            title: {
                text: 'Localidades'
            }
        },
        yAxis: {
            title: {
                text: 'Superficie (m^2)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [
            {
                type: "line",
                data: []
            }
            
        ]
    };

    constructor(private solarService: SolarService) {}
    
    ngOnInit() {
        this.getMisDatos()
    }

    getMisDatos() {
        this.solarService.getSolaresApi().subscribe(
          result => {
            const misDatos: Array<Solar> = [];
            let api = null;
            api = result;
            for (let x of api) {
              let p = new Solar(
                x.id,
                x.direccion.calle,
                x.direccion.calle2,
                x.direccion.numero,
                x.localidad,
                x.luz,
                x.agua,
                x.f_subida,
                
              );
              misDatos.push(p);
            }
    
            type tDoc = {
              superficie: number;
              localidad: string;
            };
    
            let localidades: Array<tDoc> = [];
    
            for (let x of misDatos) {
              let i = false;
              for (let t of localidades) {
                if (x.superficie == t.superficie) {
                  t.localidad;
                  i = true;
                }
              }
              if (!i) {
                let a: tDoc = {
                  superficie: x.superficie,
                  localidad: x.localidad
                };
                localidades.push(a);
              }
            }
            localidades.sort((a, b) => (a.superficie > b.superficie) ? 1 : -1)
    
            this.chartOptions.xAxis["categories"] = localidades.map((x: tDoc) => x.superficie);
    
            this.chartOptions.series[0]["data"] = localidades.map((x: tDoc) => x.localidad);
    
            Highcharts.chart("miGrafico01", this.chartOptions);
        },
        error => console.log(error),
        );
    }
}


