import { Component, OnInit } from '@angular/core';
import { FromService} from '../../services/from.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor(private readonly fromservice:FromService) { }
  textoDenombre: string ='';
  textoDefecha: Date = new Date;
  personas:any[] = [];
  enable = false;
  ngOnInit(): void {
  }
  save(){
    this.fromservice.savePerson(this.textoDenombre,this.textoDefecha).subscribe();
    console.log(this.textoDenombre,this.textoDefecha);
  }

  get(){
    this.fromservice.getPerson().subscribe(Response => {
      if(Response.length>=1){
        this.enable = true;
        this.personas=Response;
        console.log(this.personas); 
      }  
    });
    console.log(this.textoDenombre,this.textoDefecha);
  }
}
