import { Component, OnInit } from '@angular/core';
import { CocktailServiceService, cocktails } from './../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent implements OnInit {

  public  cocktails:cocktails[]= [];
  private  service:CocktailServiceService;

  constructor( param_service:CocktailServiceService ){
      this.service  =  param_service;
  }

  public  ngOnInit():void{
      this.service.getCocktails().subscribe(
          (param_cocktails:any) => {
              this.cocktails  =  param_cocktails;
          }
      );
  }

}
