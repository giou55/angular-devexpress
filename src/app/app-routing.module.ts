import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Datagridsample1Component } from './datagrid/datagridsample1/datagridsample1.component';
import { Datagridsample2Component } from './datagrid/datagridsample2/datagridsample2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "datagrid1", component: Datagridsample1Component },
  { path: "datagrid2", component: Datagridsample2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
