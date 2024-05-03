import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http:HttpClient) { }
   getEtudiant(){
    return this.http.get('http://localhost:3010/etudiant')
   }
}
