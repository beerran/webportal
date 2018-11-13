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
                    new TilePanel(new Panel('market-value-net-graph', 'Market Value Net Graph', 'assets/mvn.json', 'table'), 6),
                    new TilePanel(new Panel('market-value-net-table', 'Market Value Net Table', 'assets/mvn.json', 'table'), 6)
                ],
                0,
                0,
                6,
                3
            ),
            new Tile(
                [
                    new TilePanel(new Panel('market-value-net-table', 'Market Value Net Table', 'assets/mvn.json', 'table'), 12)
                ],
                6,
                0,
                3,
                2
            )
        ]);
    }
    getTiles(): Observable<Tile[]> {
        return this.data$;
    }
}
