import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {}

  getQuestion() {
    return this.http.get('http://localhost:3000/questions');
  }

  ajoutQuestion(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/questions/question', data, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout de la question :', error);
          return throwError(error);
        })
      );
  }

  getExamen() {
    return this.http.get('http://localhost:3004/examen');
  }
}
