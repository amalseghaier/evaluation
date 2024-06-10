import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http:HttpClient) { }
  getClasse(){
   return this.http.get('http://localhost:3008/classe/classes')
  }
  addClasse(data:any){
    return this.http.post('http://localhost:3008/classe/classes',data)
   }
  
  deleteClasse(classeId: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/classe/classe/classes/${classeId}`);
  }

  updateClasse(id: string, updatedClasse: any): Observable<any> {
    return this.http.put<any>(`http://localhost:5000/classe/classe/classes/${id}`, updatedClasse);
  }
  getDepartement(): Observable<any[]> { // Renommez la méthode en getClasses
    return this.http.get<any[]>('http://localhost:5000/departement')
   }
}
