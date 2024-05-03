import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';
interface Examen {
  titre: string;
  description: string;
  date_debut: string;
  date_fin: string;
  duree: number;
  type_examen: string;
  heure: string;
  id_classe: string; // Ajoutez l'identifiant de classe ici
}
@Component({
  selector: 'app-ajoute-examen',
  templateUrl: './ajoute-examen.component.html',
  styleUrls: ['./ajoute-examen.component.css']
})
export class AjouteExamenComponent implements OnInit {
  selectedClasse: any;
  classes: any[] = [];
  examen: any = {};

  constructor(private examenService: ExamenService) {}

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.examenService.getClasses().subscribe(
      (data: any[]) => {
        this.classes = data;
      },
      (error: any) => {
        console.log('Erreur lors du chargement des classes :', error);
      }
    );
  }

  add(f: any) {
    if (f.invalid) {
      console.log('Form is invalid. Please fill all required fields.');
      return;
    }

    let data = f.value;
    console.log(data);

    this.examenService.ajoutExamen(data).subscribe(
      (response: any) => {
        console.log('Exam added successfully:', response);
        // Optionally, you can redirect or show a success message here
      },
      (error: any) => {
        console.log('Error adding exam:', error);
        if (error && error.error && error.error.message) {
          console.log('Error message:', error.error.message);
          // Display error message to the user or handle the error appropriately
        }
      }
    );
    
  }
}
