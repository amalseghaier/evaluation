import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }
   getEtudiant(){
    return this.http.get('http://localhost:5000/users/etudiant')
   }
   addEtudiant(data:any){
   return this.http.post('http://localhost:3010/create',data)
  }
  getClasses(): Observable<any[]> { // Renommez la méthode en getClasses
   return this.http.get<any[]>('http://localhost:5000/classe/classe/classes');
 }
 getDepartement(): Observable<any[]> { // Renommez la méthode en getClasses
   return this.http.get<any[]>('http://localhost:5000/departement')
  }
  deleteUsers(userId: any): Observable<any> {
    return this.http.delete(`http://localhost:3010/users/${userId}`);
  }
}
