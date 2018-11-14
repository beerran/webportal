import { ChartPanelConfig } from './../modules/dashboard/panel.base';
import { Injectable } from '@angular/core';

import { Panel } from '../models/panel';
import { TablePanelComponent } from '../modules/dashboard/components/table-panel/table-panel.component';
import { TablePanelConfig } from '../modules/dashboard/panel.base';
import { ColumnPanelComponent } from './../modules/dashboard/components/column-panel/column-panel.component';

@Injectable({ providedIn: 'root' })
export class PanelService {
    public getComponentForPanelType(panelType: string) {
        switch (panelType) {
            case 'column':
                return ColumnPanelComponent;
            case 'drilldown':
            case 'line':
            case 'pie':
            case 'table':
            default:
                return TablePanelComponent;
        }
    }

    public getInputsForPanel(panel: Panel): {[key: string]: any} {
        switch (panel.type) {
            case 'column':
            return {
                panelConfig: panel.config as ChartPanelConfig
            };
            case 'drilldown':
            case 'line':
            case 'pie':
            case 'table':
            default:
                return {
                    panelConfig: panel.config as TablePanelConfig
                };
        }
    }
}
