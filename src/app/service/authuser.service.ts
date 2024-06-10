import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnseignantComponent } from '../enseignant/enseignant.component';


@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  private apiUrl = 'http://localhost:5000/users'; // Votre URL API

  constructor(private http: HttpClient) {}

  login(email: string, mot_de_passe: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, mot_de_passe });
  }
 
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }
}
