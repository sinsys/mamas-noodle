// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing / Supplemental
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/scaffold/header/header.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './components/shopping/ingredient/ingredient.component';
import { RecipeBookComponent } from './components/recipe/recipe-book/recipe-book.component';
import { RecipeListComponent } from './components/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './components/recipe/recipe/recipe.component';
import { FooterComponent } from './components/scaffold/footer/footer.component';
import { RecipePageComponent } from './components/recipe/recipe.component'
import { ShoppingPageComponent } from './components/shopping/shopping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material UI
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    RecipePageComponent,
    ShoppingPageComponent,

    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,

    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
