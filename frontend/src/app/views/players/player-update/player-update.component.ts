import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Players } from 'src/app/models/players.model';
import { PlayersServices } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.scss']
})
export class PlayerUpdateComponent implements OnInit {

  id: string | null;
  player: any;
  public playerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayersServices,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
    this.playerService.getById(this.id)
      .subscribe(response => {
        this.player = {
          name: response.name,
          age: response.age,
          goals: response.goals,
          hometown: response.hometown
        }

        this.playerForm = this.fb.group({
          name: [this.player.name, [Validators.required]],
          age: [this.player.age, [Validators.required]],
          goals: [this.player.goals, [Validators.required]],
          hometown: [this.player.hometown, [Validators.required]],
        });
      });
    }
  }

  update() {
    if(this.id) {
      this.playerService.update(this.id, this.playerForm.value)
        .subscribe(response => {});
  
      this.playerForm.reset();
      window.location.href = '/';
    }
  }
}
