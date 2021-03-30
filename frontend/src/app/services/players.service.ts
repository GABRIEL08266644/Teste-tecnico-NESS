import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Players } from "src/app/models/players.model";
 
@Injectable({
    providedIn: 'root'
})
export class PlayersServices {
    api = 'https://localhost:5001/Players';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }) 
    };

    constructor(
        private httpClient: HttpClient 
    ) {}

    public getAll(): Observable<Players[]> {
        return this.httpClient.get<Players[]>(this.api, this.httpOptions);
    }

    public postPlayer(player: Players): Observable<Players> {
        return this.httpClient.post<Players>(this.api, player, this.httpOptions);
    }

    public getById(id: string): Observable<Players> {
        const url = `${this.api}/${id}`;
        return this.httpClient.get<Players>(url, this.httpOptions);
    }

    public delete(id: string): Observable<Players> {
        const url = `${this.api}/${id}`;
        return this.httpClient.delete<Players>(url, this.httpOptions);
    }

    public update(id: string, player: Players): Observable<Players> {
        const url = `${this.api}/${id}`;
        return this.httpClient.put<Players>(url, player, this.httpOptions);
    }
}