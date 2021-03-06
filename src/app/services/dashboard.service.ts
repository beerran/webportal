import { ChartPanelConfig } from './../modules/dashboard/panel.base';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Tile, TilePanel } from '../models/tile';
import { Panel } from './../models/panel';
import { TablePanelComponent } from './../modules/dashboard/components/table-panel/table-panel.component';

@Injectable({ providedIn: 'root' })
export class DashboardService {
    private data$: Observable<Tile[]>;
    constructor() {
        this.data$ = of([
            new Tile(
                [
                    new TilePanel(new Panel('market-value-net-graph', 'Market Value Net Graph',
                    {endpoint: 'assets/mvn.json', fields: this.getTableFields(), label_property: 'product'} as ChartPanelConfig,
                    'column'), 6),
                    new TilePanel(new Panel('market-value-net-table', 'Market Value Net Table',
                    {endpoint: 'assets/mvn.json', fields: this.getTableFields()}, 'table'), 6)
                ],
                0,
                0,
                6,
                3
            ),
            new Tile(
                [
                    new TilePanel(new Panel('market-value-net-table', 'Market Value Net Table',
                    {endpoint: 'assets/mvn.json', fields: this.getTableFields()}, 'table'), 12)
                ],
                6,
                0,
                3,
                2
            )
        ]);
    }
    private getTableFields() {
        return [
            { 'display_name': 'Product', 'name': 'product', 'type': 'text' },
            { 'display_name': 'Trade date', 'name': 'trade_date', 'type': 'decimal' },
            { 'display_name': 'Value date', 'name': 'value_date', 'type': 'decimal' }
        ];
    }
    getTiles(): Observable<Tile[]> {
        return this.data$;
    }
}
