import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecipeService} from '../recipe.service';

import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  uuid :string;
  recipeInfo :Recipe;
  errorMessage:string;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.uuid = params['uuid']; 
      console.log(this.uuid);
      // In a real app: dispatch action to load the details here.
      this.recipeService.getRecipe(this.uuid ).subscribe(
        recipe => this.recipeInfo = recipe,
        error => this.errorMessage = <any>error
      );
    });
    




  }

}
