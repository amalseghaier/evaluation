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
  email: string = '';
  mot_de_passe: string = '';
  errorMessage: string = '';

  constructor(private authuserService: AuthuserService, private router: Router) {}

  connecter(form: NgForm) {
    if (form.valid) {
      this.authuserService.login(form.value.email, form.value.mot_de_passe).subscribe(
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
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs du formulaire.';
    }
  }

  private handleLoginResponse(response: any) {
    if (response && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('type_utilisateur', response.type_utilisateur);
      const type_utilisateur = response.type_utilisateur;
      if (type_utilisateur === 'etudiant') {
        this.router.navigate(['/etudiant']);
      } else if (type_utilisateur === 'enseignant') {
        this.router.navigate(['/enseignant']);
      } else {
        // Gérer d'autres types d'utilisateurs si nécessaire
      }
    } else {
      this.errorMessage = 'Réponse de connexion invalide.';
    }
  }
}
