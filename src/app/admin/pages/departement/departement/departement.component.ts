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


}
