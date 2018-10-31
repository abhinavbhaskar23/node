import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cat } from '../shared/models/cat.model';
import { environment } from 'client/environments/environment';

@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(environment.baseUri+'/api/cats');
  }

  countCats(): Observable<number> {
    return this.http.get<number>(environment.baseUri+'/api/cats/count');
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(environment.baseUri+'/api/cat', cat);
  }

  getCat(cat: Cat): Observable<Cat> {
    return this.http.get<Cat>(environment.baseUri+`/api/cat/${cat._id}`);
  }

  editCat(cat: Cat): Observable<any> {
    return this.http.put(environment.baseUri+`/api/cat/${cat._id}`, cat, { responseType: 'text' });
  }

  deleteCat(cat: Cat): Observable<any> {
    return this.http.delete(environment.baseUri+`/api/cat/${cat._id}`, { responseType: 'text' });
  }

}
