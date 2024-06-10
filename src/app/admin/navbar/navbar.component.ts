import { Component } from '@angular/core';
import { AuthadminService } from 'src/app/service/authadmin.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent {
  nom:any
  constructor(private asd:AuthadminService){
    this.nom=this.asd.ProfilAdmin.nom

  }
 
}
