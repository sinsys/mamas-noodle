// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Routing / Supplemental
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Material UI
import { MatTabsModule } from '@angular/material/tabs';

// Components
import { HeaderComponent } from './scaffold/header/header.component';
import { NavbarComponent } from './scaffold/navbar/navbar.component';
import { FooterComponent } from './scaffold/footer/footer.component';

import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';

import { RecipeBookComponent } from './components/recipes/recipe-book/recipe-book.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping/shopping-list-edit/shopping-list-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    // Scaffold
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    // Pages
    RecipesPageComponent,
    ShoppingPageComponent,
    // Components
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
