import { Panel } from './panel';

export class Tile {
    constructor(
        public panels: TilePanel[],
        public x: number,
        public y: number,
        public cols: number,
        public rows: number
    ) { }
}

export class TilePanel {
    constructor(
        public panel: Panel,
        public x: number
    ) { }
}
