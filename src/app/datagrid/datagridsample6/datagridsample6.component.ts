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
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import DataSource from 'devextreme/data/data_source';
import { Service } from '../../app.service';
import { Employee, EmployeesService } from 'src/app/employees.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'datagridsample6',
  templateUrl: 'datagridsample6.component.html',
  styleUrls: ['datagridsample6.component.css'],
  providers: [Service],
})
export class Datagridsample6Component {
  //dataSource: DataSource;
  employees: Employee[] = [];

  collapsed = false;

  exportGrid(e:any) {
    if (e.format === 'xlsx') {
        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet("Main sheet");
        exportDataGrid({
            worksheet: worksheet,
            component: e.component,
        }).then(function() {
            workbook.xlsx.writeBuffer().then(function(buffer) {
                saveAs(
                  new Blob([buffer],
                  { type: "application/octet-stream" }),
                  "DataGrid.xlsx"
                );
            });
        });
    }
    else if (e.format === 'pdf') {
        const doc = new jsPDF();
        exportDataGridToPdf({
            jsPDFDocument: doc,
            component: e.component,
        }).then(() => {
            doc.save('DataGrid.pdf');
        });
    }
  }

  constructor(service: Service, employeesService: EmployeesService) {
    //this.dataSource = service.getDataSource();
    this.employees = employeesService.getEmployees();
  }
}







