import {
  NgModule, Component, Pipe, PipeTransform, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxBulletModule,
  DxTemplateModule,
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { Service } from '../../app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'datagridsample2',
  templateUrl: 'datagridsample2.component.html',
  styleUrls: ['datagridsample2.component.css'],
  providers: [Service],
})
export class Datagridsample2Component {
  dataSource: DataSource;

  collapsed = false;

  contentReady = (e:any) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(['EnviroCare']);
    }
  };

  customizeTooltip = (pointsInfo:any) => (
    { text: `${parseInt(pointsInfo.originalValue)}%` }
  );

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }
}





