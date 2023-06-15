import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Datagridsample1Component } from './datagrid/datagridsample1/datagridsample1.component';
import { Datagridsample2Component } from './datagrid/datagridsample2/datagridsample2.component';
import { Datagridsample3Component } from './datagrid/datagridsample3/datagridsample3.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "datagrid1", component: Datagridsample1Component },
  { path: "datagrid2", component: Datagridsample2Component },
  { path: "datagrid3", component: Datagridsample3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
