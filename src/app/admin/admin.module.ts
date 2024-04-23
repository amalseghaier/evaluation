import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { EtudiantComponent } from './pages/etudiant/etudiant/etudiant.component';
import { EnseignantComponent } from './pages/ensignant/enseignant/enseignant.component';
import { DepartementComponent } from './pages/departement/departement/departement.component';

import { ListeexamenComponent } from './pages/listeexamen/listeexamen.component';
import { RouterModule, Routes  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AjouteEnseignantComponent } from './pages/ensignant/ajoute-enseignant/ajoute-enseignant.component';
import { AjouteEtudiantComponent } from './pages/etudiant/ajoute-etudiant/ajoute-etudiant.component';
import { AjouteDepartementComponent } from './pages/departement/ajoute-departement/ajoute-departement.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ClasseComponent } from './pages/classe/classe/classe.component';
import { AjouteClasseComponent } from './pages/classe/ajoute-classe/ajoute-classe.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SiderbarComponent,
    EtudiantComponent,
    EnseignantComponent,
    DepartementComponent,
    ListeexamenComponent,
    DashboardComponent,
    AjouteEnseignantComponent,
    AjouteEtudiantComponent,
    AjouteDepartementComponent,
    ProfileAdminComponent,
    ClasseComponent,
    AjouteClasseComponent,
    
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
   
  ],
 
})
export class AdminModule { }
