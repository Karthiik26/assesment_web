import { Component } from '@angular/core';
import { CrudoperationService } from '../service/crudoperation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private crudservice: CrudoperationService, private activatedroute: ActivatedRoute, private route: Router) { }

  insertedmsg: string = '';
  datagetting: undefined | any;

  ngOnInit() {
    let dataid = this.activatedroute.snapshot.paramMap.get('id');
    console.log(dataid);

    dataid && this.crudservice.getImg(dataid).subscribe((res) => {
      console.log(res);
      this.datagetting = res;
    });
  }

  Updatedata(data: any) {
    if (this.datagetting) {
      data.id = this.datagetting.id;
    }

    this.crudservice.updatekey(data).subscribe((res) => {
      console.log(res);
      if (res) {
        this.insertedmsg = 'Image Details Updated Succesfully'
      }
    });
    setTimeout(() => {
      this.insertedmsg = ''
    }, 3000);
    setTimeout(() => {
      this.route.navigate(['/ShowData']);
    }, 5000);
  }

}
