import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  ProfilAdmin = {
    nom: '',
    type_utilisateur: ''
  };
  IsLoggedIn: boolean = false;
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  loginadmin(data: any) {
    return this.http.post('http://localhost:3010/loginAdmin', data);
  }

  saveDataProfil(token: string, nom: string, type_utilisateur: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('nom', nom); // Ajouter le nom au stockage local
    localStorage.setItem('type_utilisateur', type_utilisateur);
    this.ProfilAdmin.nom = nom; // Mettre à jour le profil admin
    this.ProfilAdmin.type_utilisateur = type_utilisateur;
    this.IsLoggedIn = true;
  }

  getUserNom(): string | null {
    let token: any = localStorage.getItem('token');
    if (token) {
      let decodeToken = this.helper.decodeToken(token);
      return decodeToken.nom || null; // Assurez-vous que le nom est correctement décodé à partir du token
    }
    return null;
  }

  LoggedIn(): boolean {
    let token: any = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    let decodeToken = this.helper.decodeToken(token);
    return decodeToken.type_utilisateur === 'Admin'; // Vérifiez que le type d'utilisateur est Admin
  }
}
