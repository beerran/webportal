import { IPanelConfig } from '../modules/dashboard/panel.base';

export class Panel {
    public component: any;
    constructor(
        public name: string,
        public title: string,
        public config: IPanelConfig,
        public type: 'table' | 'drilldown' | 'column' | 'line' | 'pie'
    ) { }
}
