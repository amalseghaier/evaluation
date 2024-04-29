import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }
   getExamen(){
    return this.http.get('http://localhost:3004/examen')
   }
   ajoutExamen(data:any) {
    return this.http.post('http://localhost:3004/examen/examens',data)
  }
  getClasses(): Observable<any[]> { // Renommez la méthode en getClasses
    return this.http.get<any[]>('http://localhost:3007/classe/classes');
  }
  
  }

