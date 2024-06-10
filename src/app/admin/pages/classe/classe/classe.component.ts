import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClasseService } from 'src/app/admin/service/classe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  dataArray: any;
  dataclasse = {
    id: '',
    nom: '',
    niveau: '',
    departementId: '' // Change to string type
  };

  constructor(private ds: ClasseService) {
    this.ds.getClasse().subscribe(data => this.dataArray = data);
  }

  deleteClasse(classeId: any, i: number): void {
    this.ds.deleteClasse(classeId).subscribe(
      response => {
        console.log(response);
        // Remove the item from the array after successful deletion
        this.dataArray.splice(i, 1);
      },
      error => {
        console.error('An error occurred while deleting:', error);
        // Display an error message to the user or take other actions on error
      }
    );
  }

  getdata(id: any, nom: string, niveau: string, departementId: string) { // Change to string type
    this.dataclasse.id = id;
    this.dataclasse.nom = nom;
    this.dataclasse.niveau = niveau;
    this.dataclasse.departementId = departementId;
    console.log(this.dataclasse);
  }
  updateClasses(f:any){
    let data=f.value
    this.ds.updateClasse(this.dataclasse.id,data).subscribe(response=>console.log(response),(err:HttpErrorResponse)=>console.log(err.message))
  }
}
