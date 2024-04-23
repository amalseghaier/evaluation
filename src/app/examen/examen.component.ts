import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {
  // exam = { titre: '', id_classe: '' };

  // constructor(private http: HttpClient) { }

  // onSubmit() {
  //   this.http.post<any>('URL_DU_BACKEND', this.exam).subscribe(
  //     response => {
  //       console.log('Réponse du backend:', response);
  //       // Ajoutez ici la logique pour gérer la réponse du backend
  //     },
  //     error => {
  //       console.error('Erreur lors de la soumission du formulaire:', error);
  //       // Ajoutez ici la logique pour gérer les erreurs
  //     }
  //   );
  // }

}
