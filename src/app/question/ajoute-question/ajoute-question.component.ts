import { Component } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-ajoute-question',
  templateUrl: './ajoute-question.component.html',
  styleUrls: ['./ajoute-question.component.css']
})
export class AjouteQuestionComponent {

  question: any = {
    options: [] // Initialize options as an empty array
  };
  constructor(private questionService: QuestionService) {}
  addOption() {
    this.question.options.push({ value: '' });
  }
  removeOption(index: number) {
    this.question.options.splice(index, 1);
  }
  ajoutQuestion(f:any) {
    let data=f.value
    // Implement your logic to handle form submission here
    console.log(data); // Example: Log form values to the console
    this.questionService.ajoutQuestion(data).subscribe(data=>console.log(data))
  }
  
}
