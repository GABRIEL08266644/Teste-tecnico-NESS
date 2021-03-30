import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Players } from 'src/app/models/players.model';
import { PlayersServices } from "src/app/services/players.service";

@Component({
  selector: 'app-player-all',
  templateUrl: './player-all.component.html',
  styleUrls: ['./player-all.component.scss']
})
export class PlayerAllComponent implements OnInit {
  
  playerSize: number;
  players: Players[]

  constructor(
    private playersServices: PlayersServices,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.playersServices.getAll().subscribe(response => {
      this.players = response;
      this.playerSize = this.players.length;

      for(let i = 0; i < this.playerSize; i++) {
        this.players[i].numberRow = i + 1;  
      }
    });
  }

  criar() {
    this.router.navigate(['/criar']);
  }
}
