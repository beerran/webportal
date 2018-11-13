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
  constructor(private dashboardService: DashboardService) { }

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

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({} as GridsterItem);
  }

  setOptions() {
    this.options = {
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize,
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
      pushItems: true
    };
  }

}
