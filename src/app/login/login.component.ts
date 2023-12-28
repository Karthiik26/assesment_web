import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private route : Router ){}

  showlogin:any=false;
  resetlog:any=false;
  display:any;

  // login area
  loginform(data:any){
    console.log(data);
    if (data.pwds == '11111111' && data.usrname=="angular") {
      this.display="Loggin Successfullyy";
      setTimeout(() => {
        this.route.navigate(['Dashboard']);
      }, 2000);
    }
    else{
      this.display="Loggin Faild";
    }
  }

  opensignup(){
    this.showlogin=true;
  }


// signup area
  signupform(data:any){
    console.log(data);

  }
  

  signupbtn(){

  }

  openlogin(){
    this.showlogin=false;
  }



// reset password block
  resetpwd(data:any){
    console.log(data);
  }

  
  forgetpwd(){
    this.resetlog=true;
    
  }
  
  forgetpwd2(){
    this.resetlog=false;
  }
}
