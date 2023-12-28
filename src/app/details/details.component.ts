import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudoperationService } from '../service/crudoperation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor( private active:ActivatedRoute, private route : Router , private crudserv : CrudoperationService ){}

  fetchid:any;

  ngOnInit(){
    let data = this.active.snapshot.paramMap.get('id');
    console.log(data);

    this.crudserv.getImg(data).subscribe((res)=>{
      console.log(res);
      this.fetchid=res;
    });
  }

}
