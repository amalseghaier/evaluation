import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/service/question.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  dataArray:any
  constructor(private ds:QuestionService){
    this.ds.getQuestion().subscribe(data=>this.dataArray=data)
  }
  deleteQuestion(QuestionId: any, i: number): void {
    this.ds.deleteQuestion
    (QuestionId).subscribe(
      response => {
        console.log(response);
        // Supprimer l'élément du tableau après suppression réussie
        this.dataArray.splice(i, 1);
      },
      error => {
        console.error('Une erreur s\'est produite lors de la suppression : ', error);
        // Afficher un message d'erreur à l'utilisateur ou effectuer d'autres actions en cas d'erreur
      }
    );
  }
  
}
