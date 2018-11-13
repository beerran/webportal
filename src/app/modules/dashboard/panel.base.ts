import { BehaviorSubject } from 'rxjs';

export interface IPanelConfig {
    endpoint: string;
}
export class TablePanelConfig implements IPanelConfig {
    constructor(
        public endpoint: string
    ) { }
}
