import { Component } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';

@Component({
  selector: 'app-ajoute-examen',
  templateUrl: './ajoute-examen.component.html',
  styleUrls: ['./ajoute-examen.component.css']
})
export class AjouteExamenComponent {
  selectedClasse: any;
  classes: any[] = [];
  examen: any = {};

  constructor(private examenService: ExamenService) {}

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
}


