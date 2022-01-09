import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizService } from './quiz.service';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { QuizCreatorComponent } from './quiz-creator/quiz-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    QuizPageComponent,
    HomeComponent,
    ResultComponent,
    QuizCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'quiz-creator', component: QuizCreatorComponent },
      { path: 'quiz-page', component: QuizPageComponent },
      { path: 'result', component: ResultComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
