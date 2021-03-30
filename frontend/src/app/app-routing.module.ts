import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PlayerAllComponent } from './views/players/player-all/player-all.component';
import { PlayerUpdateComponent } from './views/players/player-update/player-update.component';
import { PlayerDeleteComponent } from './views/players/player-delete/player-delete.component';
import { PlayerCreateComponent } from './views/players/player-create/player-create.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "elenco",
    component: PlayerAllComponent
  },
  {
    path: "editar/:id",
    component: PlayerUpdateComponent
  },
  {
    path: "remover/:id",
    component: PlayerDeleteComponent
  },
  {
    path: "criar",
    component: PlayerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
