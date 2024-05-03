import { Component } from '@angular/core';
import { EnseignantService } from 'src/app/admin/service/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoute-enseignant',
  templateUrl: './ajoute-enseignant.component.html',
  styleUrls: ['./ajoute-enseignant.component.css']
})
export class AjouteEnseignantComponent {
  enseignant: any = {}; // Déclaration de la propriété enseignant

  constructor(private enseignantService: EnseignantService, private router: Router) {}

  addEnseignant(f: any) {
    let data = f.value;
    console.log(data);
    this.enseignantService.addEnseginant(data).subscribe(data => {
      this.router.navigate(['/admin/enseignant']);
    });
  }
}


