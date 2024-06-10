import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  
  constructor(private http:HttpClient) { }
  getExamen(){
   return this.http.get('http://localhost:5000/examen/examen/examen')
  }
}
