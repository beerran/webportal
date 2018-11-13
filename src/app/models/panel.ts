export class Panel {
    public component: any;
    constructor(
        public name: string,
        public title: string,
        public endpoint: string,
        public type: 'table' | 'drilldown' | 'bar' | 'line' | 'pie'
    ) { }
}
