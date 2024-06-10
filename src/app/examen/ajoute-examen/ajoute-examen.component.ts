import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/service/examen.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Examen {
  id?: number;
  titre: string;
  date_debut: string;
  date_fin: string;
  duree: number;
  type_examen: string;
  id_classe: string;
}

@Component({
  selector: 'app-ajoute-examen',
  templateUrl: './ajoute-examen.component.html',
  styleUrls: ['./ajoute-examen.component.css']
})
export class AjouteExamenComponent implements OnInit {
  examenForm: FormGroup;
  selectedClasse: string = '';
  classes: any[] = [];
  erreurDateDebut: boolean = false;
  erreurDateFin: boolean = false;
  messageEnregistrement: string = '';

  constructor(private examenService: ExamenService, private fb: FormBuilder) {
    this.examenForm = this.fb.group({
      id: ['', Validators.required],
      titre: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      duree: ['', [Validators.required, Validators.pattern('60|90')]],
      type_examen: ['', Validators.required],
      id_classe: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadClasses();
    this.examenForm.valueChanges.subscribe(() => this.checkDatesValidity());
  }

  loadClasses() {
    this.examenService.getClasses().subscribe(
      (data: any[]) => {
        this.classes = data;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des classes :', error);
      }
    );
  }

  checkDatesValidity() {
    const dateDebut = this.examenForm.get('date_debut')?.value;
    const dateFin = this.examenForm.get('date_fin')?.value;

    if (dateDebut && dateFin && new Date(dateFin) <= new Date(dateDebut)) {
      this.erreurDateFin = true;
      this.erreurDateDebut = false;
    } else {
      this.erreurDateFin = false;
      this.erreurDateDebut = false;
    }
  }

  onSubmit() {
    if (this.examenForm.valid) {
      const formData = this.examenForm.value;
      // Vérifiez que la durée est soit 60, soit 90
      if (formData.duree === 60 || formData.duree === 90) {
        this.add(formData);
      } else {
        this.messageEnregistrement = 'La durée doit être de 60 minutes ou 90 minutes.';
      }
    } else {
      this.messageEnregistrement = 'Veuillez remplir correctement tous les champs du formulaire.';
    }
  }

  add(examenData: Examen) {
    this.examenService.ajoutExamen(examenData).subscribe(
      (response: any) => {
        console.log('Exam added successfully:', response);
        this.messageEnregistrement = 'Examen ajouté avec succès.';
        this.examenForm.reset();
      },
      (error: any) => {
        console.log('Error adding exam:', error);
        if (error && error.error && error.error.message) {
          console.log('Error message:', error.error.message);
          this.messageEnregistrement = error.error.message;
        } else {
          this.messageEnregistrement = 'Une erreur est survenue lors de l\'ajout de l\'examen.';
        }
      }
    );
  }
}
