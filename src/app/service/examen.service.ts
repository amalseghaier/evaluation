import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }
   getExamen(){
    return this.http.get('http://localhost:5000/examen/examen')
   }
   ajoutExamen(data:any) {
    return this.http.post('http://localhost:3012/examen/examens',data)
  }
  getClasses(): Observable<any[]> { // Renommez la méthode en getClasses
    return this.http.get<any[]>('http://localhost:5000/classe/classe/classes');
  }
  
  deleteExamen(ExamenId: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/examen/examen/examens/${ExamenId}`);
  }
}
  

