import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent {
  constructor(private router: Router) {}
  telecharger() {
    // Ajoutez ici la logique pour le téléchargement
    console.log('Téléchargement en cours...');
  }

  // Méthode pour l'ajout
  ajouter() {
    // Ajoutez ici la logique pour l'ajout d'un élément
    this.router.navigate(['./admin/ajdepartement'])
  }


}
