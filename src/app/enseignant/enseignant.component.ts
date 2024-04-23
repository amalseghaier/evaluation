import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAddExam() {
    this.router.navigate(['/examen']); // Passer la route sous forme de tableau
  }

}
