import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { QuestionService } from 'src/app/service/question.service';
export interface Question {
  id: number;
  titre: string;
  type: 'choix_unique' | 'choix_multiple' | 'vrai_faux';
  options: any[]; // Tu peux définir le type spécifique pour les options selon ta logique
  reponseCorrecte: string;
  points: number;
  id_examen: number;
}


@Component({
  selector: 'app-ajoute-question',
  templateUrl: './ajoute-question.component.html',
  styleUrls: ['./ajoute-question.component.css']
})
export class AjouteQuestionComponent implements OnInit {
  question: any = {
    options: [],
    id_examen: null // Initialize id_examen as null
  };
  examens: any[] = []; // Array to hold fetched exams

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.fetchExamens(); // Fetch exams when component initializes
  }

  fetchExamens() {
    this.questionService.getExamen().subscribe(
      (data: any) => {
        this.examens = data; // Assurez-vous que les données sont correctement assignées à la variable examens
      },
      (error: any) => {
        console.log('Erreur lors du chargement des examens :', error);
      }
    );
  }
  ajouterQuestion(form: NgForm) {
    if (form.valid) {
      // Logique pour ajouter la question
    }
  }
  
  

  addOption() {
    this.question.options.push({ value: '' });
  }

  removeOption(index: number) {
    this.question.options.splice(index, 1);
  }

  add(f: any) {
    let data = f.value;
    console.log(data); // Log form values to the console
    this.questionService.ajoutQuestion(data).subscribe((response: any) => {
      console.log(response); // Log response from server
    });
  }
}
