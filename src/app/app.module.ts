import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { Datagridsample1Component } from './datagrid/datagridsample1/datagridsample1.component';
import { HomeComponent } from './home/home.component';
import { Datagridsample2Component } from './datagrid/datagridsample2/datagridsample2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Datagridsample3Component } from './datagrid/datagridsample3/datagridsample3.component';
import { Datagridsample4Component } from './datagrid/datagridsample4/datagridsample4.component';
import { Datagridsample5Component } from './datagrid/datagridsample5/datagridsample5.component';
import { Datagridsample6Component } from './datagrid/datagridsample6/datagridsample6.component';

@NgModule({
  declarations: [
    AppComponent,
    Datagridsample1Component,
    HomeComponent,
    Datagridsample2Component,
    NavbarComponent,
    Datagridsample3Component,
    Datagridsample4Component,
    Datagridsample5Component,
    Datagridsample6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
