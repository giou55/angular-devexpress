import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Datagridsample1Component } from './datagrid/datagridsample1/datagridsample1.component';
import { Datagridsample2Component } from './datagrid/datagridsample2/datagridsample2.component';
import { Datagridsample3Component } from './datagrid/datagridsample3/datagridsample3.component';
import { Datagridsample4Component } from './datagrid/datagridsample4/datagridsample4.component';
import { Datagridsample5Component } from './datagrid/datagridsample5/datagridsample5.component';
import { Datagridsample6Component } from './datagrid/datagridsample6/datagridsample6.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "datagrid1", component: Datagridsample1Component },
  { path: "datagrid2", component: Datagridsample2Component },
  { path: "datagrid3", component: Datagridsample3Component },
  { path: "datagrid4", component: Datagridsample4Component },
  { path: "datagrid5", component: Datagridsample5Component },
  { path: "datagrid6", component: Datagridsample6Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
