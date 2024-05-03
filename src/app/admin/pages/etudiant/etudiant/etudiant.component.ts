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
 
 

}
