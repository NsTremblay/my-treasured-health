import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipesUrl = 'http://22c9b14a.ngrok.io/drupal-health/recipe/1';  // URL to web API

  constructor(private http: Http) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.recipesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let recipes : Recipe[] = [];
    for(let recipe of res.json())
    {
      recipes.push(new Recipe(recipe.title, recipe.body));
    }
    console.log(recipes);
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
