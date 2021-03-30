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
            name: [{ value: this.player.name, disabled: true }],
            age: [{ value: this.player.age, disabled: true }],
            goals: [{ value: this.player.goals, disabled: true }],
            hometown: [{ value: this.player.hometown, disabled: true }]
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
