import { Component } from '@angular/core';
import { PicsumService } from '../service/picsum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface PicsumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

@Component({
  selector: 'app-picsumdetails',
  templateUrl: './picsumdetails.component.html',
  styleUrls: ['./picsumdetails.component.css']
})
export class PicsumdetailsComponent {

  constructor(private service: PicsumService, private httpClient : HttpClient, private active: ActivatedRoute, private route: Router) { }
  fetchdata: any;
  
  ngOnInit() {
    let dataid = this.active.snapshot.paramMap.get('id');
    this.getPicsumData(dataid);
  }
  
  picsumImg: any;
  
  getPicsumData(id: any): void {
    this.service.getpicsumimages().subscribe((data: PicsumImage[]) => {
          this.picsumImg = data;
          this.fetchdata = this.picsumImg[id];
        },
        error => console.error('Error fetching data:', error)
      );
  }

  

}
