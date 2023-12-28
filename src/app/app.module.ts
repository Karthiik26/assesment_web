import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { PicsumComponent } from './picsum/picsum.component';
import { HttpClientModule } from '@angular/common/http';
import { PicsumService } from './service/picsum.service';
import { PicsumdetailsComponent } from './picsumdetails/picsumdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ShowComponent,
    UpdateComponent,
    CreateComponent,
    DetailsComponent,
    PicsumComponent,
    PicsumdetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [PicsumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
