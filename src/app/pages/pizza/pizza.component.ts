import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  optionsBars = {
          series: [{
          data: [248, 138]
        }],
          chart: {
          type: 'bar',
          height: 380
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: false,
            dataLabels: {
              position: 'bottom'
            },
          }
        },
        colors: ['#33b2df', '#d4526e'],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['Concluidos', 'Pendentes'],
        },
        yaxis: {
          labels: {
            show: false
          }
        }
      };

  optionsPie = {
      series: [248, 138],
      chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Concluidos', 'Pendentes'],
    colors: ['#33b2df', '#d4526e'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  constructor() { }

  ngOnInit(): void {
    const bars = new ApexCharts(document.querySelector("#bars"), this.optionsBars);
    bars.render();

    const pizza = new ApexCharts(document.querySelector("#pizza"), this.optionsPie);
    pizza.render();
  }

  exists(ints: number[], k: number) {
    let min, max, idx;
    min = 0;
    max = ints.length;
		while (max > min){
      idx = Math.floor(max / 2);
      if (ints[idx] > k) {
        max = idx;
      } else {
        min = idx;
      }
    }
    return max == min;
	}

}
