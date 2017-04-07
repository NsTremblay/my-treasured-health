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
  recipeInfo : Recipe;
  errorMessage: string;

  mode = 'Observable';

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {

    this.route.params.subscribe(params => {
      
      this.uuid = params['uuid']; 

      // In a real app: dispatch action to load the details here.
      this.recipeService.getRecipe(this.uuid).subscribe(
        recipe => this.recipeInfo = recipe,
        error => this.errorMessage = <any>error
      );
    });
  }

  ngOnInit() {


  }

}
