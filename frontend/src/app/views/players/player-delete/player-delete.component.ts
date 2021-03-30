import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Players } from 'src/app/models/players.model';
import { PlayersServices } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.scss']
})
export class PlayerDeleteComponent implements OnInit {

  id: string | null;
  player: Players;
  public playerForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private playerService: PlayersServices,
    private route: ActivatedRoute,
    ) { }
    
    ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.playerService.getById(this.id)
        .subscribe(response => {
          this.player = response;
          this.playerForm = this.fb.group({
            name: [this.player.name, [Validators.required]],
            age: [this.player.age, [Validators.required]],
            goals: [this.player.goals, [Validators.required]],
            hometown: [this.player.hometown, [Validators.required]],
          });
        });
    }
  }

  apagar() {
    if(this.id) {
      this.playerService.delete(this.id)
        .subscribe(res => {});
  
      this.playerForm.reset();
      window.location.href = '/';
    }
  }
}
