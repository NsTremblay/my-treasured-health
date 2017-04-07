import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

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

  recipeTypeString :string; 

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => {
      this.recipeTypeString = params['type']; 
    });

    this.recipeService.getSummaries().subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error
    );
  }
  
  ngOnInit() {
    
  }

}
