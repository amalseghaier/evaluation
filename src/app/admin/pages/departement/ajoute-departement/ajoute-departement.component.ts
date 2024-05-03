import { Component } from '@angular/core';
import { DepartementService } from 'src/app/admin/service/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoute-departement',
  templateUrl: './ajoute-departement.component.html',
  styleUrls: ['./ajoute-departement.component.css']
})
export class AjouteDepartementComponent {
  
  departement: any = {}; // Déclaration de la propriété departement

  constructor(private ds:DepartementService,private route:Router ){}

  add(f: any) {
    let data = f.value;
    console.log(data);
    this.ds.addDepartement(data).subscribe(data=>{
    this.route.navigate(['//admin/departement'])
  })
}
  
}
