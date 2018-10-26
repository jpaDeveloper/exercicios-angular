import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ExercisesComponent } from './list-exercises/exercises/exercises.component';
import { Exercise2Component } from './list-exercises/exercise2/exercise2.component';
import { Exercise3Component } from './list-exercises/exercise3/exercise3.component';
import { Exercise4Component } from './list-exercises/exercise4/exercise4.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component

  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
