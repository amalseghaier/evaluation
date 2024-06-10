import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EnseignantComponent } from './pages/ensignant/enseignant/enseignant.component';
import { EtudiantComponent } from './pages/etudiant/etudiant/etudiant.component';
import { DepartementComponent } from './pages/departement/departement/departement.component';
import { AjouteEnseignantComponent } from './pages/ensignant/ajoute-enseignant/ajoute-enseignant.component';
import { AjouteEtudiantComponent } from './pages/etudiant/ajoute-etudiant/ajoute-etudiant.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { AjouteDepartementComponent } from './pages/departement/ajoute-departement/ajoute-departement.component';
import { ClasseComponent } from './pages/classe/classe/classe.component';
import { AjouteClasseComponent } from './pages/classe/ajoute-classe/ajoute-classe.component';
import { ExamenComponent } from './pages/examen/examen.component';






const routes: Routes = [
  {
    path: '',
     component: AdminComponent, 
     children: [
      { path: '',
      component:DashboardComponent 
    },
    { path: 'navbar', component: NavbarComponent },
    {path:'profile',component:ProfileAdminComponent},
     
     { path: 'siderbar',
      component: SiderbarComponent },
      
    
      {path:'etudiant',
      component:EtudiantComponent},
    {path:'enseignant',
    component:EnseignantComponent},
    {path:'ajouter',
    component:AjouteEnseignantComponent},
     {path:'departement',
     component:DepartementComponent},
     {path:'ajdepartement',component:AjouteDepartementComponent},
     {path:'ajoute',component:AjouteEtudiantComponent},
     {path:'classe', component:ClasseComponent},
     {path:'ajoutes',component:AjouteClasseComponent},
     {path:'liste',component:ExamenComponent}
     
    ],
  },
 





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
