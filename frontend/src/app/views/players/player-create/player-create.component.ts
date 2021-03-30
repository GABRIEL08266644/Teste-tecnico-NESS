import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PlayersServices } from 'src/app/services/players.service';
import { Players } from 'src/app/models/players.model';
 
@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {

  public playerForm: FormGroup;   

  constructor(
    private fb: FormBuilder,
    // private rest: PlayersServices,
    public playerService: PlayersServices
  ) {  }

  ngOnInit(): void {
    this.playerForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      goals: ['', [Validators.required]],
      hometown: ['', [Validators.required]],
    });
  }

  postPlayer() {
    this.playerService.postPlayer(this.playerForm.value)
      .subscribe(result => {});

    this.playerForm.reset();
    window.location.reload();
  }
}