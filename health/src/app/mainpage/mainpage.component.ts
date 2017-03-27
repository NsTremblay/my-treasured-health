import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../recipe.service';

import {Recipe} from '../recipe';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  errorMessage:string;

  recipes: Recipe[];

  mode = 'Observable';

  constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    this.recipeService.getSummaries().subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error
    );
  }

}
