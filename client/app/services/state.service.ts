import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { State } from '../shared/models/state.model';
import { environment } from 'client/environments/environment';

@Injectable()
export class StateService {

  constructor(private http: HttpClient) { }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(environment.baseUri+'/api/state');
  }

  

}
