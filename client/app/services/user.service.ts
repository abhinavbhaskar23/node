import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../shared/models/user.model';
import { environment } from 'client/environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUri+'/api/user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post(environment.baseUri+'/api/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUri+'/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>(environment.baseUri+'/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(environment.baseUri+'/api/user', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(environment.baseUri+`/api/user/${user._id}`);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(environment.baseUri+`/api/user/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(environment.baseUri+`/api/user/${user._id}`, { responseType: 'text' });
  }

}
