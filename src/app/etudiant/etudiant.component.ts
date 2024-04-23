import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  nom: string = '';
  departement: string = '';
  telephone: string = '';
  email: string = 'example@gmail.com';
  genre: string = 'Male'; // ou 'Female' selon votre cas
  dateNaissance: string = '';
  enregistrerModifications() {
    // Vous pouvez traiter ici la sauvegarde des modifications dans votre application
    console.log('Modifications enregistrées :', this.nom, this.departement, this.telephone, this.email, this.genre, this.dateNaissance);
  }
}
 
