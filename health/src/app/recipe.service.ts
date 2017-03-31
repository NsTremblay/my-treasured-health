import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'http://68e4dd1f.ngrok.io/drupal-health/recipe/';  // URL to web API

  constructor(private http: Http) { }

  getRecipe(uuid:string): Observable<Recipe> {
    return this.http.get(this.recipesUrl+uuid)
                    .map(this.extractRecipe)
                    .catch(this.handleError);
  }

  getSummaries(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl+"all")
                    .map(this.extractSummaries)
                    .catch(this.handleError);
  }

  private extractRecipe(res: Response) {
    let recipe : Recipe;
    let response = res.json()[0];
    recipe = new Recipe(response.uuid, response.title, response.body, response.field_foodimage);

    return recipe || { };
  }

  private extractSummaries(res: Response) {
    let recipes : Recipe[] = [];
    for(let recipe of res.json())
    {
      recipes.push(new Recipe(recipe.uuid, recipe.title, recipe.body, recipe.field_foodimage));
    }
    return recipes || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
