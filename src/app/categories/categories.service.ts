import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

  constructor(private http: Http) { }

  getAllCategories() {
    return this.http.get('/api/category')
      .map(res => res.json());
  }

}
