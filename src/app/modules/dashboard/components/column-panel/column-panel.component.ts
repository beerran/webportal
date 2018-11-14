import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartService } from 'src/app/services/chart.service';
import { skip } from 'rxjs/operators';
import { PanelDataService } from 'src/app/services/paneldata.service';
import { ChartPanelConfig, TablePanelConfig } from '../../panel.base';
import { SeriesObject } from 'highcharts';

@Component({
  selector: 'app-column-panel',
  templateUrl: './column-panel.component.html',
  styleUrls: ['./column-panel.component.scss']
})
export class ColumnPanelComponent implements OnInit {
  chart: Chart;

  @Input() panelConfig: ChartPanelConfig;
  constructor(
    private chartService: ChartService,
    private panelDataService: PanelDataService
    ) {

  }

  ngOnInit() {
    this.setupChart();
      this.chartService.listen().pipe(skip(1)).subscribe(() => {
        this.chart.ref.reflow();
      });
    this.panelDataService.getData(this.panelConfig.endpoint).subscribe(data => {
      this.chart.ref.xAxis[0].setCategories(
        this.panelConfig.fields.filter(field => field.name !== this.panelConfig.label_property).map(field => field.display_name));
      data.map(serie => {
        this.chart.addSerie({
          name: serie[this.panelConfig.label_property],
          data: this.panelConfig.fields.filter(field => field.name !== this.panelConfig.label_property).map(field => serie[field.name]),
        });
      });
    });
  }

  private setupChart(): void {
      this.chart = new Chart({
        chart: {
          reflow: true,
          type: 'column',
          height: '75%'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        series: []
      });
  }

}
