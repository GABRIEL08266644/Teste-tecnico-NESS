import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CastComponent } from './views/cast/castAll/cast.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "elenco",
    component: CastComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
