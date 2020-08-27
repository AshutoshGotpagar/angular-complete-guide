import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Bread and Toppings',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'
      ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  emitRecipe(recipe: Recipe): void {
    this.recipeEmitter.emit(recipe);
  }


}
