import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private client: HttpClient) { }

  public get(): Observable<Heroe[]> {
    const url = environment.urlApi + "heroes"
    return this.client.get<Heroe[]>(url);
  }

  public getById(id: string): Observable<Heroe> {
    const url = environment.urlApi + "heroes/" + id
    return this.client.get<Heroe>(url);
  }

  public getByQuery(query: string): Observable<Heroe[]> {
    const url = environment.urlApi + "heroes?q=" + query
    return this.client.get<Heroe[]>(url);
  }
}
