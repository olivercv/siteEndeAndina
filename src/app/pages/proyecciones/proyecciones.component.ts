import { Component, OnInit , ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets , ChartType, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-proyecciones',
  templateUrl: './proyecciones.component.html',
  styleUrls: ['./proyecciones.component.scss']
})
export class ProyeccionesComponent implements OnInit {

 
  public generacionData: ChartDataSets[] = [
    { data: [686160, 195520, 76250, 312450 ], label: 'PTERI' },
    { data: [1280687.56,	1266871.58,	1220783,	1241732], label: 'PTSUR' },
    { data: [1625099,	1558131.02,	1582895.33,	1285182.92], label: 'PTWAR' }
  ];

 



  public utilidadData: ChartDataSets[] = [
    { data: [750244, 2366575, 6714122, 752442, 4601226, 9283171, 22161048, 42796665, 77320592, 60137372, 64717917 ], label: 'PTERI' }
  ];

  public proyectadaData: ChartDataSets[] = [
    { data: [135010557, 108304631, 78461532,  104375853], label: 'Utilidad proyectada' }
  ];
  public proyectadaChartLabels: Label[] = ['2020', '2021', '2022', '2023'];

  public lineChartLabels: Label[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    }
   
  };
  public barChartColors: Color[] = [
    { // naranja
      backgroundColor: 'rgba(248,102,36,1)'
    }
  ];

  public lineChartColors: Color[] = [
    { // verde claro
      backgroundColor: 'rgba(148,188,32,0)',
      borderColor: 'rgba(148,188,32,1)',
      pointBackgroundColor: 'rgba(148,188,32,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,188,32,0.8)'
    },

    { // naranja
      backgroundColor: 'rgba(248,102,36,0)',
      borderColor: 'rgba(248,102,36,1)',
      pointBackgroundColor: 'rgba(248,102,36,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(248,102,36,0.8)'
    },
    
    { // amarillo
      backgroundColor: 'rgba(249,200,14,0)',
      borderColor: 'rgba(249,200,14,1)',
      pointBackgroundColor: 'rgba(249,200,14,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(249,200,14,0.8)'
    },


    { // dark verde oscuro
      backgroundColor: 'rgba(17,80,93,0)',
      borderColor: 'rgba(17,80,93,1)',
      pointBackgroundColor: 'rgba(17,80,93,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(17,80,93,1)'
    },
    { // rojo
      backgroundColor: 'rgba(102,46,155,0)',
      borderColor: 'rgba(102,46,155,1)',
      pointBackgroundColor: 'rgba(102,46,155,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(102,46,155,0.8)'
    },
    { // celeste
      backgroundColor: 'rgba(67,188,205,0)',
      borderColor: 'rgba(67,188,205,1)',
      pointBackgroundColor: 'rgba(67,188,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(67,188,205,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

 constructor() {
  // this.getData();
 }

 ngOnInit() {
}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}


}
