import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';



const routes: Routes = [
{ path: 'cocktail-list', component: CocktailListComponent},
];

@NgModule({
declarations: [],

imports: [
CommonModule,
[RouterModule.forRoot(routes)]],

exports: [RouterModule]
})
export class AppRoutingModule { }