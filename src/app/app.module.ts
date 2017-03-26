import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesService } from './exercises/exercises.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from "./categories/categories.service";
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: DashboardComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'workouts', component: WorkoutsComponent },
  { path: 'stats', component: ProfileComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    CategoriesComponent,
    MuscleGroupsComponent,
    HomeComponent,
    DashboardComponent,
    WorkoutsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoriesService, ExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
