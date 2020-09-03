import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

export class RecipeService {

    recipeEmitter = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pizza',
            'Bread and Toppings',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/' +
            'chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Burger',
            'Buns and Bread',
            'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            [
                new Ingredient('Buns', 2),
                new Ingredient('French Fries', 20)
            ]
        )
    ];

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipeById(id: number): Recipe {
        return this.recipes[id - 1];
    }
}
