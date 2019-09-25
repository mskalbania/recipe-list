import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
    selector: 'app-shopping-list-element',
    templateUrl: './shopping-list-element.component.html',
    styleUrls: ['./shopping-list-element.component.css']
})
export class ShoppingListElementComponent implements OnInit {

    @Input() ingredient: Ingredient;

    constructor(private shoppingService: ShoppingService) {
    }

    ngOnInit() {
    }

    onIngredientRemove() {
        this.shoppingService.remove(this.ingredient);
    }
}
