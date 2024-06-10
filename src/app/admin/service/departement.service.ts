import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
  getDepartement(){
   return this.http.get('http://localhost:5000/departement')
  }
  addDepartement(data:any){
    return this.http.post('http://localhost:3007',data)
   }
   deleteDepartement(departementId: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/departement/${departementId}`);
  }
}
