import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamenService } from 'src/app/service/examen.service';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  dataArray:any
  constructor(private ds:ExamenService){
    this.ds.getExamen().subscribe(data=>this.dataArray=data)
  }
  ngOnInit():void{}
}
