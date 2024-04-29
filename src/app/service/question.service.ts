import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private http:HttpClient) {}
  getQuestion(){
    return this.http.get('http://localhost:3000/questions')
  }
  ajoutQuestion(data:any){
    return this.http.post('http://localhost:3000/questions',data)
    }
}

