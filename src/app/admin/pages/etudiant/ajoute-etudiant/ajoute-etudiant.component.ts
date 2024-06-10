import { Component } from '@angular/core';
import { EtudiantService } from 'src/app/admin/service/etudiant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoute-etudiant',
  templateUrl: './ajoute-etudiant.component.html',
  styleUrls: ['./ajoute-etudiant.component.css']
})
export class AjouteEtudiantComponent {
  utilisateur: any = {};
  selectedClasse: any;
  classes: any[] = [];
  selectedDepartement: any; 
  departements: any[] = [];

 
  constructor(private enseignantService: EtudiantService, private router: Router) {}

  ngOnInit() {
    this.loadClasses();
    this.loadDepartements();
  }

  loadClasses() {
    this.enseignantService.getClasses().subscribe(
      (data: any[]) => {
        this.classes = data;
      },
      (error: any) => {
        console.log('Erreur lors du chargement des classes :', error);
      }
    );
  }

  loadDepartements() {
    this.enseignantService.getDepartement().subscribe(
      (data: any[]) => {
        this.departements = data;
      },
      (error: any) => {
        console.log('Erreur lors du chargement des départements :', error);
      }
    );
  }
  addEtudiant(f: any) {
    let data = f.value;
    console.log(data);
    this.enseignantService.addEtudiant(data).subscribe(data => {
      this.router.navigate(['/admin/etudiant']);
    });
  }


}
