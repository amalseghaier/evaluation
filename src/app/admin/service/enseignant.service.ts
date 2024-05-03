import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

 
  constructor(private http:HttpClient) { }
   getEnseginant(){
    return this.http.get('http://localhost:3010/enseignant')
   }
   addEnseginant(data:any){
    return this.http.post('http://localhost:3010',data)
   }
   addClasse(data: any) {
    return this.http.post('http://localhost:3007/classe/classes', data);
  }

  addDepartement(data: any) {
    return this.http.post('http://localhost:3006', data);
  }
}
