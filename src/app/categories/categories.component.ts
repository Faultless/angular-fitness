import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "./categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}