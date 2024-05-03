import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
  getDepartement(){
   return this.http.get('http://localhost:3006')
  }
  addDepartement(data:any){
    return this.http.post('http://localhost:3006',data)
   }
}
