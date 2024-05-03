import { Component } from '@angular/core';
import { ClasseService } from 'src/app/admin/service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  dataArray:any
  constructor(private ds:ClasseService){
    this.ds.getClasse().subscribe(data=>this.dataArray=data)
  }

}
