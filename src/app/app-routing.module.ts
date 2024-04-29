import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ExamenComponent } from './examen/examen/examen.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { QuestionComponent } from './question/question/question.component';
import { AjouteExamenComponent } from './examen/ajoute-examen/ajoute-examen.component';
import { AjouteQuestionComponent } from './question/ajoute-question/ajoute-question.component';





const routes: Routes = [
  {path :'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'enseignant',component:EnseignantComponent},
  {path:'examen',component:ExamenComponent},
  {path:'etudiant',component:EtudiantComponent},
  {path:'question',component:QuestionComponent},
  {path:'ajouteexamen',component:AjouteExamenComponent},
  {path:'ajoutesquestion',component:AjouteQuestionComponent},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
