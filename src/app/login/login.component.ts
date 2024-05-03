import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthuserService } from '../service/authuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cin: string = '';
  email: string = '';
  mot_de_passe: string = '';
  type_utilisateur: string = '';
  errorMessage: string = '';

  constructor(private authuserService: AuthuserService, private router: Router) {}

  selectTypeUtilisateur(type: string) {
    this. type_utilisateur = type;
  }

  connecter(f: NgForm) {
    if (this. type_utilisateur === 'etudiant') {
      this.authuserService.login(this.cin, this.mot_de_passe).subscribe(
        (response: any) => {
          this.handleLoginResponse(response);
        },
        (error: any) => {
          if (error.status === 400) {
            this.errorMessage = 'Identifiants invalides. Veuillez réessayer.';
          } else {
            this.errorMessage = 'Erreur de connexion: ' + error.message;
          }
        }
      );
    } else if (this. type_utilisateur === 'enseignant') {
      this.authuserService.login(this.email, this.mot_de_passe).subscribe(
        (response: any) => {
          this.handleLoginResponse(response);
        },
        (error: any) => {
          if (error.status === 400) {
            this.errorMessage = 'Identifiants invalides. Veuillez réessayer.';
          } else {
            this.errorMessage = 'Erreur de connexion: ' + error.message;
          }
        }
      );
    }
  }

  private handleLoginResponse(response: any) {
    if (response && response.token) {
      const token = response.token;
      const decodedToken = this.decodeToken(token);
      if (decodedToken && decodedToken.type_utilisateur) {
        if (decodedToken.type_utilisateur === 'etudiant') {
          this.router.navigate(['/etudiant']);
        } else if (decodedToken.type_utilisateur === 'enseignant') {
          this.router.navigate(['/enseignant']);
        } else {
          // Gérer d'autres types d'utilisateurs si nécessaire
        }
      }
    }
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      console.error('Erreur de décodage du token :', error);
      return null;
    }
  }
}
