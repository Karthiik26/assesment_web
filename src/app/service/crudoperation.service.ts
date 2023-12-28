import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudoperationService {

  constructor( private http: HttpClient ) { }
 
  // Inserting data into Json file
  Create(data:any){
    this.http.post('http://localhost:3000/Create',data, {observe : 'response'}).subscribe((result) => {
      console.warn(result);
    });
  }

  // Reading Data from json file
  Reading(){
    return this.http.get<any[]>('http://localhost:3000/Create');
  }

  // delete data from json file
  deleteImg(id:any){
    return this.http.delete(`http://localhost:3000/Create/${id}`);
  }

  // displaying perticular id
  getImg(id:any){
    return this.http.get(`http://localhost:3000/Create/${id}`);
  }

  // updating image or author in the json file
  updatekey(update:any){
    return this.http.put(`http://localhost:3000/Create/${update.id}`,update);
  }

}


