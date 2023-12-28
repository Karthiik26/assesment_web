import { Component } from '@angular/core';
import { CrudoperationService } from '../service/crudoperation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private crudservice: CrudoperationService, private route :Router) { }
  Displaying: string = '';

  Putdata(data: any) {
    this.crudservice.Create(data);
    if (data) {
      this.Displaying = "Project Created Successfullyyyy!!!!";
      setTimeout(() => this.Displaying='', 3000);
      setTimeout(() => this.route.navigate(['/Dashboard']), 5000);

    }
  }


}
