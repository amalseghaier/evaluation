import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/admin/service/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoute-enseignant',
  templateUrl: './ajoute-enseignant.component.html',
  styleUrls: ['./ajoute-enseignant.component.css']
})
export class AjouteEnseignantComponent implements OnInit {
  utilisateur: any = {};
  selectedClasse: any;
  classes: any[] = [];
  selectedDepartement: any; 
  departements: any[] = [];

  constructor(private enseignantService: EnseignantService, private router: Router) {}

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

  addEnseignant(f: any) {
    let data = f.value;
    console.log(data);
    this.enseignantService.addEnseginant(data).subscribe(data => {
      this.router.navigate(['/admin/enseignant']);
    });
  }
}
