import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../service/authadmin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  dataReceived: any;
  url: any;
  messageAuthError: any;

  constructor(
    private asd: AuthadminService,
    private route: Router,
    private arouter: ActivatedRoute
  ) {
    console.log(this.asd.IsLoggedIn);
    if (this.asd.LoggedIn()) {
      this.route.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
    this.url = this.arouter.snapshot.queryParams['returnUrl'] || '/admin';
    console.log(this.url);
  }

  login(form: NgForm) {
    if (form && form.valid) {
      const data = form.value;

      this.asd.loginadmin(data).subscribe((response) => {
        this.dataReceived = response;
        this.asd.saveDataProfil(this.dataReceived.token, this.dataReceived.nom, this.dataReceived.type_utilisateur);
        console.log(this.asd.ProfilAdmin.nom);
        console.log(this.asd.ProfilAdmin.type_utilisateur);
        console.log(this.asd.IsLoggedIn);
        this.route.navigate([this.url]);
      }, err => {
        this.messageAuthError = "Invalid email and password";
        console.error(err);
      });
    } else {
      console.error("Form is undefined or invalid.");
    }
  }
}
