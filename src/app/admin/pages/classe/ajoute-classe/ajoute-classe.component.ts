import { Component } from '@angular/core';
import { ClasseService } from 'src/app/admin/service/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoute-classe',
  templateUrl: './ajoute-classe.component.html',
  styleUrls: ['./ajoute-classe.component.css']
})
export class AjouteClasseComponent {

   
  classe: any = {}; // Déclaration de la propriété departement

  constructor(private ds:ClasseService ,private route:Router){}

  add(f: any) {
    let data = f.value;
    console.log(data);
    
    this.ds.addClasse(data).subscribe(data=>{
      this.route.navigate(['/admin/classe'])
    })
  }
    
  }
