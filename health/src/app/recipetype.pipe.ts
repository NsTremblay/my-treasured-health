import { Pipe, PipeTransform } from '@angular/core';
import{ RecipeSummary } from './recipeSummary';

@Pipe({
  name: 'recipetype'
})
export class RecipetypePipe implements PipeTransform {
  transform(recipes: Array<RecipeSummary>, category: string): Array<RecipeSummary> {
    console.log(category);
    if(category==null){
      return recipes;
    }
    return recipes.filter(item => item.type[0].value === category);
  }
}
