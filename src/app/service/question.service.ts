import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {}

  getQuestion() {
    return this.http.get('http://localhost:3013/questions');
  }

  ajoutQuestion(data:any) {
    return this.http.post('http://localhost:3013/questions/question',data)
  }

  getExamen() {
    return this.http.get('http://localhost:5000/examen/examen/examen');
  }
  deleteQuestion(QuestionId: any): Observable<any> {
    return this.http.delete(`http://localhost:5000/questions/questions/${QuestionId}`);
  }
}
