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
 
}
