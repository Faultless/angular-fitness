import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './exercises.service';
import { Exercise } from "./exercise";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  private exercises: Exercise[] = [];

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit() {
    this.exercisesService.getAllExercises().subscribe(exercises => {
       exercises.forEach((exercise, index) => {
         this.exercises[index] = {
             "name": exercise.name,
             "category": {
               "name": exercise.category
             },
             "muscleGroups": [
               {"name": exercise.muscleGroup[0]}
             ],
             "demoVideo": exercise.demoVideo
         };
       });
     });
  }

}
