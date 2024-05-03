import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamenService } from 'src/app/service/examen.service';

interface Examen {
  titre: string;
  description: string;
  date_debut: string;
  date_fin: string;
  duree: number;
  type_examen: string;
  heure: string;
  id_classe: string; 
}
@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  dataArray:any
  constructor(private ds:ExamenService){
    this.ds.getExamen().subscribe(data=>this.dataArray=data)
  }
 
  // ngOnInit(): void {
  //   this.fetchClasses(); // Call a method to fetch classes when the component initializes
  // }

  // fetchClasses() {
  //   this.ds.getClasses().subscribe((data: any[]) => {
  //     this.classes = data; // Assign fetched classes to the 'classes' property
  //   });
  // }
  
}
