import { Component } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';

interface Examen {
  id: number;
  titre: string;
  description: string;
  date_debut: string;
  date_fin: string;
  duree: number;
  type_examen: string;
  heure: string;
  id_classe: string;
}

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  dataArray: Examen[] = [];
  examen: Examen | null = null; // Définition de la propriété examen

  constructor(private ds: ExamenService) {
    this.ds.getExamen().subscribe((data: any) => {
      this.dataArray = data as Examen[]; // Convertir les données en Examen[]
    });
  }

  passerExamen(selectedExamen: Examen | null) {
    if (selectedExamen) {
      this.examen = selectedExamen;
      console.log('Passer l\'examen :', selectedExamen);
    }
  }
  deleteExamen(ExamenId: any, i: number): void {
    this.ds.deleteExamen
    (ExamenId).subscribe(
      response => {
        console.log(response);
        // Supprimer l'élément du tableau après suppression réussie
        this.dataArray.splice(i, 1);
      },
      error => {
        console.error('Une erreur s\'est produite lors de la suppression : ', error);
        // Afficher un message d'erreur à l'utilisateur ou effectuer d'autres actions en cas d'erreur
      }
    );
  }
  
}
