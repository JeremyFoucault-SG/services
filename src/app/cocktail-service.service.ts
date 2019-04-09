import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NumberValueAccessor } from '@angular/forms/src/directives';
@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  private service: HttpClient;

  constructor(param_service: HttpClient) {
    this.service = param_service;
  }

  public getCocktails(): Observable<cocktails[]> {
    const obs1: Observable<any> = this.service.get('assets/data.json');
    const treatment = (param_data: any) => {
      return param_data as cocktails[];
    };
    return obs1.pipe(map(treatment));
  }

  ngOnInit() {}
}

export class cocktails {
  public name: string;
  public price: number;
  public img: string;
}
