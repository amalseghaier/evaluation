import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/admin/service/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoute-classe',
  templateUrl: './ajoute-classe.component.html',
  styleUrls: ['./ajoute-classe.component.css']
})
export class AjouteClasseComponent implements OnInit {
  selectedDepartement: any;
  departements: any[] = [];
  classe: any = {};
  errorMessage: string = '';
  constructor(private ds: ClasseService, private route: Router) {}
  

  ngOnInit() {
    this.loadDepartements();
  }

  add(f: any) {
    let data = f.value;
  
    this.ds.addClasse(data).subscribe(
      (response) => {
        this.route.navigate(['/admin/classe']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la classe :', error);
        // Gérer l'affichage du message d'erreur ici
      }
    );
  }
  

  loadDepartements() {
    this.ds.getDepartement().subscribe(
      (data: any[]) => {
        this.departements = data;
      },
      (error: any) => {
        console.log('Erreur lors du chargement des départements :', error);
      }
    );
  }
}
