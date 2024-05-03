import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  private apiUrl = 'http://localhost:3010'; // Votre URL API

  constructor(private http: HttpClient) {}

  loginEnseignant(email: string, mot_de_passe: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/loginEnsignant`, { email, mot_de_passe });
  }

  login(cin: string, mot_de_passe: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { cin, mot_de_passe });
  }
}
