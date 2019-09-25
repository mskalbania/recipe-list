import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
    selector: 'app-shopping-list-view',
    templateUrl: './shopping-list-view.component.html',
    styleUrls: ['./shopping-list-view.component.css']
})
export class ShoppingListViewComponent implements OnInit {

    ingredients: Ingredient[];

    constructor(private shoppingService: ShoppingService) {
    }

    ngOnInit() {
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientsChangedEvent.subscribe(
            (ingredients: Ingredient[]) => this.ingredients = ingredients
        );
    }
}
