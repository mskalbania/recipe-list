import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[];

    constructor(private recipeService: RecipeService, private router: Router) {
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.recipeService.recipesChangeEvent.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
                this.redirectToFirst();
            }
        );
    }

    redirectToFirst() {
        if (this.recipes.length > 0) {
            this.router.navigate(['/recipes', this.recipes[0].id]);
        } else {
            this.router.navigate(['/recipes']);
        }
    }
}
