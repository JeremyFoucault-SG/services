import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  private  service:  HttpClient;

  constructor(param_service:  HttpClient) {
      this.service  =  param_service;
  }

  public  getImageOfTheDay():  Observable<string> {
      const  obs1:Observable<any> = this.service.get('https://api.nasa.gov/planetary/apod?api_key=TiC9CLvf82Zxgyxur9593p2629789UQQISuioShs');
      const  treatment  = ( param_img) => {
          return  param_img.url;
      };

      return  obs1.pipe( map( treatment) );
  }
}
