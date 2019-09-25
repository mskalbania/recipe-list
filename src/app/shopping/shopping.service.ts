import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingService {

    ingredientsChangedEvent = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [];

    constructor() {
        this.ingredients.push(
            new Ingredient('Milk', 1),
            new Ingredient('Coffee', 3),
            new Ingredient('Salt', 1)
        );
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.emitIngredientChange();
    }

    removeAll() {
        this.ingredients = [];
        this.emitIngredientChange();
    }

    remove(ingredient: Ingredient) {
        const idx = this.ingredients.indexOf(ingredient);
        this.ingredients.splice(idx, 1);
        this.emitIngredientChange();
    }

    private emitIngredientChange() {
        this.ingredientsChangedEvent.emit(this.ingredients.slice());
    }
}
