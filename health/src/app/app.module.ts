import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { MaterialModule } from '@angular/material';

import { RecipeService} from './recipe.service';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipetypePipe } from './recipetype.pipe';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: ':type', component: MainpageComponent },
  { path: 'recipe/:uuid', component: RecipeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    RecipeComponent,
    RecipetypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
