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
import { Employee, EmployeesService } from 'src/app/employees.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'datagridsample5',
  templateUrl: 'datagridsample5.component.html',
  styleUrls: ['datagridsample5.component.css'],
  providers: [Service],
})
export class Datagridsample5Component {
  //dataSource: DataSource;
  employees: Employee[] = [];
  selectedEmployee: Employee | any;
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

  constructor(service: Service, employeesService: EmployeesService) {
    //this.dataSource = service.getDataSource();
    this.employees = employeesService.getEmployees();
    this.selectEmployee = this.selectEmployee.bind(this);
  }

  selectEmployee(e: any) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done((employee: any) => {
        if(employee) {
            this.selectedEmployee = employee;
        }
    });
}
}





