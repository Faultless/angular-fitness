import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "./categories.service";
import { Category } from "app/categories/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe(categories => {
       categories.forEach((category, index) => {
         this.categories[index] = { "name": category.name };
       });
     });
  }
}