import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { PrimeTableModule } from 'prime-table';

import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './components/panel/panel.component';
import { TablePanelComponent } from './components/table-panel/table-panel.component';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  imports: [
    SharedModule,
    GridsterModule,
    DynamicModule.withComponents([
      TablePanelComponent
    ]),
    PrimeTableModule
  ],
  declarations: [
    DashboardComponent,
    TileComponent,
    TablePanelComponent,
    PanelComponent
  ]
})
export class DashboardModule { }
