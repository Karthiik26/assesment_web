import { Component } from '@angular/core';
import { CrudoperationService } from '../service/crudoperation.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  constructor(private crudservice: CrudoperationService) { }

  Displaying: any;
  deleteDisplay: string = '';

  DeleteData(del: any) {
    this.crudservice.deleteImg(del).subscribe((res) => {
      console.log(res);
      if (res) {
        this.deleteDisplay = "One Image Is Deleted";
      }
      this.List();
    });
    setTimeout(() => this.deleteDisplay = '', 3000);

  }

  ngOnInit() {
    this.List();
  }

  List() {
    this.crudservice.Reading().subscribe((res) => {
      this.Displaying = res;
      console.log(res);

    });
  }

}
