import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<any>('http://localhost:3000/user');
  }
  setUser(body: any){
    return this.http.post<any>('http://localhost:3000/user', body);
  }

}
