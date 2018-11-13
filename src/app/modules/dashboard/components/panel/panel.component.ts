import { Component, OnInit, Input } from '@angular/core';
import { Panel } from 'src/app/models/panel';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  component: any;
  inputs: any;
  outputs: any;
  _panel: Panel;
  @Input()
  set panel(panel: Panel) {
    this._panel = panel;
    this.component = this.panelService.getComponentForPanelType(panel.type);
    this.inputs = this.panelService.getInputsForPanel(panel);
  }
  constructor(private panelService: PanelService) {
  }

  ngOnInit() {
  }

}
