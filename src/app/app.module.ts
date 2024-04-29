import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { ExamenComponent } from './examen/examen/examen.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { QuestionComponent } from './question/question/question.component';
import { AjouteExamenComponent } from './examen/ajoute-examen/ajoute-examen.component';
import { AjouteQuestionComponent } from './question/ajoute-question/ajoute-question.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    EnseignantComponent,
    ExamenComponent,
    EtudiantComponent,
    QuestionComponent,
    AjouteExamenComponent,
    AjouteQuestionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
