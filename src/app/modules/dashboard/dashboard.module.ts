import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { PrimeTableModule } from 'prime-table';

import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './components/panel/panel.component';
import { TablePanelComponent } from './components/table-panel/table-panel.component';
import { TileComponent } from './components/tile/tile.component';
import { ColumnPanelComponent } from './components/column-panel/column-panel.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
@NgModule({
  imports: [
    SharedModule,
    GridsterModule,
    DynamicModule.withComponents([
      TablePanelComponent
    ]),
    ChartModule,
    PrimeTableModule
  ],
  declarations: [
    DashboardComponent,
    TileComponent,
    TablePanelComponent,
    PanelComponent,
    ColumnPanelComponent
  ],
  entryComponents: [ColumnPanelComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } // add as factory to your providers
  ]
})
export class DashboardModule { }
