import { Component, OnInit } from '@angular/core';
import { NasaServiceService } from '../nasa-service.service';


@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  public service:NasaServiceService;
  public title = '';

  constructor(param_service : NasaServiceService) {
    this.service  =  param_service;
 
   }

  public ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe(
      (param_img:string) => {
          this.title  =  param_img;
      }
  );
}

}
