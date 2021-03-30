import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './components/template/body/body.component';
import { PlayerAllComponent } from './views/players/player-all/player-all.component';
import { PlayerCreateComponent } from './views/players/player-create/player-create.component';
import { PlayerDeleteComponent } from './views/players/player-delete/player-delete.component';
import { PlayerUpdateComponent } from './views/players/player-update/player-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    PlayerAllComponent,
    PlayerCreateComponent,
    PlayerDeleteComponent,
    PlayerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }