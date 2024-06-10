import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/admin/service/etudiant.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  dataArray:any
  constructor(private ds:EtudiantService){
    this.ds.getEtudiant().subscribe(data=>this.dataArray=data)
  }
  deleteUsers(id: any, i: number) {
    this.ds.deleteUsers(id).subscribe(
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
