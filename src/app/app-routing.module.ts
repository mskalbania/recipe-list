import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePanelComponent } from './recipes/recipe-panel/recipe-panel.component';
import { ShoppingListViewComponent } from './shopping/shopping-list-view/shopping-list-view.component';

const routes: Routes = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipePanelComponent},
    {path: 'recipes/:id', component: RecipePanelComponent},
    {path: 'shopping', component: ShoppingListViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
