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
  
}
