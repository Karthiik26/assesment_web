import { Component, inject } from '@angular/core';
import { PicsumService } from '../service/picsum.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-picsum',
  templateUrl: './picsum.component.html',
  styleUrls: ['./picsum.component.css']
})
export class PicsumComponent {

  constructor(private picsum: PicsumService) { }

  displayItems: any;

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.displayItems = this.picsum.getpicsumimages();
    // this.picsum.getpicsumimages().subscribe((d)=>{
    //   console.log(d);
    // });
  }

}
