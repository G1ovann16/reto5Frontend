import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<any>('http://localhost:3000/category');
  }
  setCategory(body: any){
    return this.http.post<any>('http://localhost:3000/category', body);
  }
}
