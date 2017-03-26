import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ExercisesService {

  constructor(private http: Http) { }

  getAllExercises() {
    return this.http.get('/api/exercise')
      .map(res => res.json());
  }
}
