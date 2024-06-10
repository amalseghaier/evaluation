import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from 'src/app/admin/service/enseignant.service';


@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  dataArray:any
  constructor(private ds:EnseignantService ){
    this.ds.getEnseginant().subscribe(data=>this.dataArray=data)
  }
  delete(id: any, i: number) {
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
