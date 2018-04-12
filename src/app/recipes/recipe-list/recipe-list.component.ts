import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Hamburger', 'Delicious', 'https://s3.envato.com/files/24992780/hamburger.jpg')
	];
	constructor() { }

	ngOnInit() {
	}
}
