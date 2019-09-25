import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

    recipe: Recipe;
    displayExportMsg = false;
    recipeChangeSubscription: Subscription;

    constructor(private recipeService: RecipeService, private shoppingService: ShoppingService,
                private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.recipeChangeSubscription = this.route.params.subscribe(
            (params: Params) => this.recipe = this.recipeService.getRecipe(params.id)
        );
    }

    exportToShoppingList() {
        this.shoppingService.addIngredients(this.recipe.ingredients);
        this.displayExportMsg = true;
        setTimeout(() => {
            this.displayExportMsg = false;
            this.router.navigate(['/shopping']);
        }, 1000);
    }

    ngOnDestroy() {
        this.recipeChangeSubscription.unsubscribe();
    }

    delete(recipe: Recipe) {
        this.recipeService.remove(recipe);
    }
}
