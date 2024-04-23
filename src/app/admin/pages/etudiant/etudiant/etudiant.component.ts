import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  constructor(private http: HttpClient, private router: Router){
    this.http.get('http://localhost:3001/api/users/liste').subscribe(data=>console.log(data))
  }
 
 

}
