import { Component, Renderer2 } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
    // ,encapsulation: ViewEncapsulation.None
})
export class ShoppingListEditComponent {

    name = '';
    amount = 0;

    // @ViewChild('ingredientAmount', {static: false}) ingredientAmountInput: ElementRef;

    onClearAll() {
        this.shoppingService.removeAll();
    }

    // onAdd(ingredientName: HTMLInputElement) {
    // this.addIngredient.emit(new Ingredient(ingredientName.value, Number(this.ingredientAmountInput.nativeElement.value)));
    // ingredientName.value = '';
    // this.ingredientAmountInput.nativeElement.value = '';
    // }

    constructor(private renderer: Renderer2, private shoppingService: ShoppingService) {
    }

    onAdd() {
        this.shoppingService.addIngredients([new Ingredient(this.name, this.amount)]);
    }

    isInputValid() {
        return this.isAmountValid() && this.isNameValid();
    }

    isAmountValid() {
        return !Number.isNaN(Number(this.amount)) && this.amount !== 0;
    }

    isNameValid() {
        return this.name.length > 0;
    }

    addValidationStyle(event: Event, isValid: boolean) {
        isValid ? this.addValidStyle(event.target) : this.addInvalidStyle(event.target);
    }

    private addValidStyle(target: EventTarget) {
        this.renderer.removeClass(target, 'is-invalid');
        this.renderer.addClass(target, 'is-valid');
    }

    private addInvalidStyle(target: EventTarget) {
        this.renderer.removeClass(target, 'is-valid');
        this.renderer.addClass(target, 'is-invalid');
    }
}
