import { Injectable } from '@angular/core';

import { Panel } from '../models/panel';
import { TablePanelComponent } from '../modules/dashboard/components/table-panel/table-panel.component';
import { IPanelConfig, TablePanelConfig } from '../modules/dashboard/panel.base';

@Injectable({ providedIn: 'root' })
export class PanelService {
    public getComponentForPanelType(panelType: string) {
        switch (panelType) {
            case 'bar':
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
            case 'bar':
            case 'drilldown':
            case 'line':
            case 'pie':
            case 'table':
            default:
                return {
                    panelConfig: {
                        endpoint: panel.endpoint
                    } as TablePanelConfig
                };
        }
    }
}
