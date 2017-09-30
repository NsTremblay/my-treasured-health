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
  sectionName:string;
  recipes: any = [];

  mode = 'Observable';

  recipeTypeString :string; 

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { 
    // this.recipeService.getSummaries().subscribe(
    //   recipes => this.recipes = recipes,
    //   error => this.errorMessage = <any>error
    // );
  }
  
  ngOnInit() {

    this.route.params.subscribe(params => {
      
      this.recipeTypeString = params['type']; 

      if(!this.recipeTypeString){
        this.recipeTypeString = "breakfast";
      }

      switch(this.recipeTypeString) { 
        case "breakfast": { 
          this.sectionName="Breakfast";
           break; 
        } 
        case "snacks": { 
          this.sectionName="Snacks";
           break; 
        } 
        case "side-dishes": { 
          this.sectionName="Side Dishes";
          break; 
        } 
        case "entrees": { 
          this.sectionName="Entrees";
          break; 
        } 
        case "desserts": { 
          this.sectionName="Desserts";
          break; 
        }
        default: { 
           this.sectionName="";
           break; 
        } 
     } 
    

      this.recipeService.getRecipeWithType(this.recipeTypeString).subscribe(r=>{
        let recipesJSON = r.json(); 
        this.recipes = [];
        for (var i = 0; i < recipesJSON.length; i++) {
          this.recipes.push(recipesJSON[i]);
        };
      });
    });

  }

}
