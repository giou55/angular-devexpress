import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxBulletModule, DxButtonModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { Datagridsample1Component } from './datagrid/datagridsample1/datagridsample1.component';
import { HomeComponent } from './home/home.component';
import { Datagridsample2Component } from './datagrid/datagridsample2/datagridsample2.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Datagridsample1Component,
    HomeComponent,
    Datagridsample2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
