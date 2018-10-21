import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExercisesComponent } from './list-exercises/exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
