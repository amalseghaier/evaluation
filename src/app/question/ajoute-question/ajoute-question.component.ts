import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { QuestionService } from 'src/app/service/question.service';

export interface Question {
  id?: number; // Propriété id en optionnel
  id_examen: number;
  titre: string;
  type: string; // Ajoutez la propriété type avec une valeur par défaut
  options: { value: string; selected: boolean }[]; // Ajout de la propriété selected pour les choix multiples
  selectedOption?: string; // Ajoutez la propriété selectedOption pour les choix uniques
  Reponse_correcte: string | string[]; // Utilisation de l'union de types pour Reponse_correcte
  points: number;
}


@Component({
  selector: 'app-ajoute-question',
  templateUrl: './ajoute-question.component.html',
  styleUrls: ['./ajoute-question.component.css']
})
export class AjouteQuestionComponent implements OnInit {
  examens: any[] = []; // Assurez-vous de définir cette propriété avec vos données d'examen
  questions: Question[] = []; // Mettez à jour le type de questions
  question: Question = {
    id_examen: 0, // Initialisez id_examen avec 0 par défaut
    titre: '', // Ajoutez la propriété titre avec une valeur par défaut
    type: 'choix_unique', // Ajoutez la propriété type avec une valeur par défaut
    points: 0, // Ajoutez la propriété points avec une valeur par défaut
    options: [],
    Reponse_correcte: '' // Initialisez Reponse_correcte avec une chaîne vide pour choix unique
  };

  constructor(private questionService: QuestionService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchExamens();
  }

  fetchExamens() {
    this.questionService.getExamen().subscribe(
      (data: any) => {
        this.examens = data;
      },
      (error: any) => {
        console.log('Erreur lors du chargement des examens :', error);
      }
    );
  }

  addOption(i: number) {
    this.questions[i].options.push({ value: '', selected: false });
  }

  removeOption(questionIndex: number, optionIndex: number) {
    const question = this.questions[questionIndex];
    question.options.splice(optionIndex, 1);
  }

  removeQuestionExam(index: number) {
    this.questions.splice(index, 1);
  }

  ajout(f: NgForm) {
    if (f.invalid) {
      console.log('Form is invalid. Please fill all required fields.');
      return;
    }

    // Traitement des options correctes avant l'envoi
    this.questions.forEach(question => {
      if (question.type === 'choix_unique' && typeof question.Reponse_correcte === 'string') {
        question.Reponse_correcte = question.Reponse_correcte.trim();
      } else if (question.type === 'choix_multiple' && Array.isArray(question.Reponse_correcte)) {
        question.Reponse_correcte = question.Reponse_correcte.map(option => option.trim());
      }
    });

    let data = {
      id_examen: this.question.id_examen,
      questions: this.questions
    };

    console.log(data); // Vérifiez la structure des données avant de les envoyer

    this.questionService.ajoutQuestion(data).subscribe(
      (response: any) => {
        console.log('question added successfully:', response);
      },
      (error: any) => {
        console.log('Error adding question:', error);
        if (error && error.error && error.error.message) {
          console.log('Error message:', error.error.message);
        }
      }
    );
  }

  addQuestion() {
    this.questions.push({ id_examen: this.question.id_examen, titre: '', type: 'choix_unique', options: [], Reponse_correcte: '', points: 0 });
  }
}
