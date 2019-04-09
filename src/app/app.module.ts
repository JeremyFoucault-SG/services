import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import {HttpClientModule} from  '@angular/common/http';
import { NasaComponent } from './nasa/nasa.component';
import { RouterModule } from '@angular/router';





@NgModule({
declarations: [
AppComponent,
CocktailListComponent,
NasaComponent,


],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule,
HttpClientModule,
RouterModule,



],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }