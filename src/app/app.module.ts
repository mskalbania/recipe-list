import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoppingListViewComponent } from './shopping/shopping-list-view/shopping-list-view.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListElementComponent } from './shopping/shopping-list-element/shopping-list-element.component';
import { FormsModule } from '@angular/forms';
import { RecipePanelComponent } from './recipes/recipe-panel/recipe-panel.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        ShoppingListViewComponent,
        ShoppingListEditComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailsComponent,
        ShoppingListElementComponent,
        RecipePanelComponent,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


