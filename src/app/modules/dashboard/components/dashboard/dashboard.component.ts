import { ChartService } from 'src/app/services/chart.service';
import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DashboardService } from 'src/app/services/dashboard.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tile } from 'src/app/models/tile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  tiles$: Observable<Tile[]>;
  constructor(
    private dashboardService: DashboardService,
    private chartService: ChartService
    ) { }

  static itemChange(item, itemComponent) {
    console.log('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.log('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.setOptions();
    this.tiles$ = this.dashboardService.getTiles();
  }

  setOptions() {
    this.options = {
      itemChangeCallback: () => this.chartService.sendReflow(),
      itemResizeCallback: () => this.chartService.sendReflow(),
      draggable: { enabled: true, ignoreContent: true },
      resizable: { enabled: true },
      gridType: 'fit',
      minCols: 9,
      maxCols: 9,
      minRows: 5,
      defaultItemCols: 3,
      defaultItemRows: 2,
      scrollToNewItems: true,
      pushResizeItems: true,
      pushItems: true,
      gridSizeChangedCallback: () => this.chartService.sendReflow()
    };
  }

}
