import { Component, Input, OnInit } from '@angular/core';
import { PrimeTableConfig, PrimeTableColumn } from 'prime-table';
import { BehaviorSubject, Observable } from 'rxjs';

import { PanelDataService } from './../../../../services/paneldata.service';
import { TablePanelConfig } from './../../panel.base';

@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.scss']
})
export class TablePanelComponent implements OnInit {
  tableConfig: PrimeTableConfig;
  data$: Observable<any[]>;
  @Input() panelConfig: TablePanelConfig;

  protected isLoading = new BehaviorSubject(false);
  constructor(private panelDataService: PanelDataService) {
  }

  ngOnInit() {
    this.setupTableConfig();
    this.isLoading.next(true);
    this.panelDataService.getData(this.panelConfig.endpoint).subscribe(data => {
      this.tableConfig.setData(data);
      this.isLoading.next(false);
    });
  }

  private setupTableConfig(): void {
    this.tableConfig = new PrimeTableConfig('none');
    this.tableConfig.disable(['filters', 'rowCount', 'export']);
    this.tableConfig.setColumns([
      new PrimeTableColumn('Product', 'product'),
      new PrimeTableColumn('Trade date', 'trade_date'),
      new PrimeTableColumn('Value date', 'value_date'),
    ]);
  }
}
