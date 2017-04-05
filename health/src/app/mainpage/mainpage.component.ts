import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipe.service';

import {RecipeSummary} from '../recipeSummary';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  errorMessage:string;

  recipes: RecipeSummary[];

  mode = 'Observable';

  constructor(private recipeService: RecipeService) { 
    this.recipeService.getSummaries().subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error
    );
  }
  
  ngOnInit() {
    
  }

}
