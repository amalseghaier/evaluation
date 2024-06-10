import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/admin/service/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent {
  dataArray:any
  constructor(private ds: DepartementService){
    this.ds.getDepartement().subscribe(data=>this.dataArray=data)
  }
  deleteDepartement(classeId: any, i: number): void {
    this.ds.deleteDepartement(classeId).subscribe(
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
