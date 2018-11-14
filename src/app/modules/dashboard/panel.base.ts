export interface IPanelConfig {
    endpoint: string;
    fields: any;
}
export class TablePanelConfig implements IPanelConfig {
    constructor(
        public endpoint: string,
        public fields: {
            display_name: string,
            name: string,
            type: 'decimal' | 'default'
        }[]
    ) { }
}

export class ChartPanelConfig implements IPanelConfig {
    constructor(
        public endpoint: string,
        public fields: {
            display_name: string,
            name: string,
            type: 'decimal' | 'default'
        }[],
        public label_property: string
    ) { }
}
