import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http:HttpClient) { }
  getClasse(){
   return this.http.get('http://localhost:3007/classe/classes')
  }
  addClasse(data:any){
    return this.http.post('http://localhost:3007/classe/classes',data)
   }
}
