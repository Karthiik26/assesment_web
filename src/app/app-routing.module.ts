import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { PicsumComponent } from './picsum/picsum.component';
import { PicsumdetailsComponent } from './picsumdetails/picsumdetails.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path:''
  },
  {
    component: ShowComponent,
    path: 'ShowData'
  },
  {
    component : UpdateComponent,
    path: 'update/:id'
  },
  {
    component : CreateComponent,
    path: 'CreateData'
  },
  {
    component: DashboardComponent,
    path: 'Dashboard'
  },
  {
    component: DetailsComponent,
    path :'Read/:id'
  },
  {
    component: PicsumComponent,
    path :'picsum'
  },
  {
    component: PicsumdetailsComponent,
    path :'picsumDetails/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
