import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { SolarService } from "../solar.service";
import { Solar } from "../solar";


@Component({
  selector: "app-grafico02",
  templateUrl: "./grafico02.component.html",
  styleUrls: ["./grafico02.component.css"]
})
export class Grafico02Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {    
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [/*
        name: 'Brands',
        colorByPoint: true,
        data: []
    */]
};

ngOnInit(){
    this.getMisDatos()
}

getMisDatos() {}