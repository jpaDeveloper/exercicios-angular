import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ExercisesComponent } from './list-exercises/exercises/exercises.component';
import { Exercise2Component } from './list-exercises/exercise2/exercise2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    Exercise2Component

  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
